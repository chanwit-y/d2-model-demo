import { create } from "zustand";
import { Edge, Node } from "@xyflow/react";
import { JsonEntity } from "./model/JsonEntity";
import { TNodeJModel, JModel } from "./model/JModel";
import { listJson, readJson } from "./action";
import { api } from "@/app/lib/config/api";
import { TFinGwReq } from "@/app/lib/config/@types/finGwReq";
import { file } from "bun";

export type ButtonType = "request" | "response";

type TStord = {
  initialNodes: Node<TNodeJModel>[];
  initialEdges: Edge[];
  initNodeTypes: Record<string, any>;
  currentFile: string;
  activeButtonType: ButtonType;
  files: string[];
  request: TFinGwReq;
  response: Record<string, any>;
};

type TActions = {
  onSelectedJsonFile: (fileName: string) => void;
  setActiveButtonType: (type: ButtonType) => void;
  reset: () => void;
  call: () => Promise<void>;
};

const init: TStord = {
  initialNodes: [],
  initialEdges: [],
  currentFile: "",
  activeButtonType: "request",
  request: {} as TFinGwReq,
  response: {},
  files: [],
    initNodeTypes: { JsonEntity },
};

export const useStore = create<TStord & TActions>((set, get) => {
  return {
    ...init,
    // initialNodes: [],
    // initialEdges: [],
    // initNodeTypes: { JsonEntity },
    // currentFile: "",
    // activeButtonType: "request",
    // files: [],
    // request: {} as TFinGwReq,
    // response: {},
    onSelectedJsonFile: async (currentFile: string) => {
      set({ currentFile });
      const json = await readJson(currentFile);
      set({ request: json as TFinGwReq });
      const j = new JModel().json2nodes(json);
      set({ initialNodes: j.nodes, initialEdges: j.nodes2edges().edges });
    },
    setActiveButtonType: (activeButtonType: ButtonType) => {
      set({ activeButtonType });

      if (activeButtonType === "response") {
        console.log("response", get().response);
        const j = new JModel().json2nodes(get().response);
        set({ initialNodes: j.nodes, initialEdges: j.nodes2edges().edges });
      } else {
        const j = new JModel().json2nodes(get().request);
        set({ initialNodes: j.nodes, initialEdges: j.nodes2edges().edges });
      }
    },
    reset: async () => {
      const files = await listJson();
      set({ ...init, files });
    },
    call: async () => {
      const response = await api.finGw(get().request);
      set({ response });
    },
  };
});
