
import type { Node, Edge, OnNodesChange, OnEdgesChange } from '@xyflow/react';
import { addEdge, useEdgesState, useNodesState } from "@xyflow/react";
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useMemo } from "react"
import { EntityNode } from "./EntityNode";

type TContext = {
	setNodes: Dispatch<SetStateAction<any>>
}

const Context = createContext<TContext>({} as TContext)

const initialNodes = [
	{ id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
	{ id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
	{
		id: 'node-1',
		type: 'textUpdater',
		dragHandle: '.drag-handle__custom',
		position: { x: 0, y: 0 },
		data: { value: 123 },
	},
];
const initialEdges = [
	{ id: 'e1-2', source: '1', target: '2' },
	{ id: 'e2-1', source: '2', target: 'node-1', targetHandle: 'a' },
	{ id: 'e2-2', source: '2', target: 'node-1', targetHandle: 'b' }
];
const nodeTypes = { textUpdater: EntityNode };

type Props = {
	children: (nodes: Node<any>[],
		onNodesChange: OnNodesChange<any>,
		edges: Edge[],
		onEdgesChange: OnEdgesChange<any>,
		nodeTypes: Record<string, any>,
		onConnect: (params: any) => void
	) => ReactNode,
}

export default function Provider({ children }: Props) {

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


	const nodeTypes = useMemo(() => ({ textUpdater: EntityNode }), []);

	const onConnect = useCallback(
		(params: any) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);

	return (<Context value={{setNodes}}>
		{children(nodes, onNodesChange, edges, onEdgesChange, nodeTypes, onConnect)}
	</Context>)
}
