import { create } from "zustand";
import { JsonEntity } from "./JsonEntity";
import data from "./data/input.json";

type TStord = {
  initialNodes: any[];
  initialEdges: any[];
  initNodeTypes: Record<string, any>;
};

export const R = (data: Record<string, any>, res: any[] = []) => {
  const obj: any[] = [];
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      if (value instanceof Array) {
        for (let item of value) {
          R(item, res);
        }
      } else {
        R(value, res);
      }
    }
    obj.push(key);
  });

  res.push(obj);

  return obj;
};

export const json2Flow = (d: Record<string, any>, k: string) => {
  let data: Record<string, any> = {};
  const nodes = [];
  const edges = [];

  Object.entries(d).map(([key, value]) => {
    //     console.log("key", key, typeof value);
    if (typeof value === "object" && value !== null) {
      //       console.log("object", value);
      data[key] = `object of ${k}`;
      const { _d, _n } = json2Flow(value, key);
      nodes.push(..._n);
    } else {
      //       console.log("value", value);
      data[key] = value;
    }

    //     nodes.push({
    //       id: key,
    //       type: "JsonModel",
    //       position: { x: 0, y: 0 },
    //       data: value,
    //     });
  });

  nodes.push(data);

  return { _d: data, _n: nodes };
  //   console.log("data", data);
};

export const useStore = create<TStord>()((set) => ({
  initialNodes: [
    //     { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    //     { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
    //     {
    //       id: "node-1",
    //       type: "JsonModel",
    //       position: { x: 0, y: 0 },
    //       data,
    //     },
    {
      id: "root",
      type: "JsonModel",
      position: { x: 0, y: 0 },
      data: {
        model: {
          name: "root",
          fields: [
            {
              name: "batch",
              type: "object",
              value: {},
              //       targetHandle: "",
              sourceHandle: "a",
            },
          ],
        },
      },
    },
    {
      id: "batch-0",
      type: "JsonModel",
      position: { x: 50, y: 50 },
      data: {
        model: {
          name: "batch",

          targetHandle: "b",
          //   sourceHandle: "",

          fields: [
            {
              name: "ExternalJobID",
              type: "string",
              value: "1234567890",
            },
            {
              name: "Headers",
              type: "object",
              value: {},
              sourceHandle: "h",
            },
          ],
        },
      },
    },
    {
      id: "header-0",
      type: "JsonModel",
      position: { x: 50, y: 50 },
      data: {
        model: {
          name: "header",
          targetHandle: "h1",
          fields: [],
        },
      },
    },
    {
      id: "header-1",
      type: "JsonModel",
      position: { x: 50, y: 50 },
      data: {
        model: {
          name: "header",
          targetHandle: "h2",
          fields: [],
        },
      },
    },
  ],
  initialEdges: [
    //     { id: "e1-2", source: "1", target: "2" },
    //     { id: 'e2-1', source: '2', target: 'node-1', targetHandle: 'a' },
    // { id: 'e2-2', source: '2', target: 'node-1', targetHandle: 'b' }
    {
      id: "a",
      source: "root",
      target: "batch-0",
      sourceHandle: "a",
      targetHandle: "b",
      //       type: "smoothstep",
    },
    {
      id: "b",
      source: "batch-0",
      target: "header-0",
      sourceHandle: "h",
      targetHandle: "h1",
      //       type: "smoothstep",
    },
    {
      id: "c",
      source: "batch-0",
      target: "header-1",
      sourceHandle: "h",
      targetHandle: "h2",
      //       type: "smoothstep",
    },
  ],
  initNodeTypes: { JsonModel: JsonEntity }, // Add your custom node types here
}));
