import { v4 as uuidv4 } from "uuid";
import { Edge, Node } from "@xyflow/react";

export type TNodeJModel = {
  model: {
    name: string;
    targetHandle: string;
    sourceId: string;
    paths: string[];
    fields: {
      name: string;
      type: string;
      value: any;
      sourceHandle?: string;
    }[];
  };
};

type JObject = {
  id: string;
  key: string;
  value: any;
  isObject: boolean;
};

class JModel {
  private _nodes: Node<TNodeJModel>[] = [];
  private _edges: Edge[] = [];

  private _json2nodes(
    data: Record<string, any>,
    bfo: string = "",
    sourceId: string = "",
    paths: string[] = [],
    res: Node<TNodeJModel>[] = []
  ) {
    const id = uuidv4();
    const obj: JObject[] = [];
    Object.entries(data).forEach(([key, value]) => {
      const isObject = typeof value === "object" && value !== null;
      if (isObject) {
        value instanceof Array
          ? value.forEach((item) =>
              this._json2nodes(item, key, id, [...paths, key], res)
            )
          : this._json2nodes(value, key, id, [...paths, `${key}`], res);
      }

      obj.push({ id, key, value, isObject });
    });

    //Note: Can be transformed to a single object
    //Todo: move this to a extension
    const p =
      res.length > 0 ? res[res.length - 1] : { position: { x: 0, y: 0 } };

    const flowObj = {
      id: `${bfo}-${id}`,
      type: "JsonEntity",
      position: { x: p.position.x - 280, y: p.position.y - 100 },
      data: {
        model: {
          name: bfo,
          targetHandle: `${bfo}-${id}-target`,
          sourceId,
          paths,
          fields: obj.map((item) => {
            return {
              name: item.key,
              type: item.isObject ? "object" : typeof item.value,
              value: item.value,
              sourceHandle: item.isObject ? `${item.key}-${id}-source` : "",
            };
          }),
        },
      },
    };

    res.push(flowObj);
  }

  private _nodes2Edges(nodes: Node<TNodeJModel>[]) {
    const edges: Edge[] = [];
    nodes.reverse().forEach((item) => {
      const { paths } = item.data.model;

      if (paths.length > 1) {
        const edge = {
          id: uuidv4(),
          source: `${paths[paths.length - 2]}-${item.data.model.sourceId}`,
          target: `${item.id}`,
          sourceHandle: `${paths[paths.length - 1]}-${
            item.data.model.sourceId
          }-source`,
          targetHandle: `${item.data.model.targetHandle}`,
          // type: "smoothstep",
          animated: true,
          style: { strokeWidth: 2, stroke: "red" },
        };
        edges.push(edge);
      }
    });
    return edges;
  }

  public get nodes(): Node<TNodeJModel>[] {
    return this._nodes;
  }

  public get edges(): Edge[] {
    return this._edges;
  }

  public json2nodes(data: Record<string, any>): JModel {
    this._json2nodes(data, "root", uuidv4(), ["root"], this._nodes);
    return this;
  }

  public nodes2edges(): JModel {
    this._edges = this._nodes2Edges(this._nodes);
    return this;
  }
}

export default new JModel();