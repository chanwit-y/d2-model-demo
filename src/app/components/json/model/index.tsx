
import { useEffect, useMemo } from "react"
import { Background, BackgroundVariant, Controls, MiniMap, Node, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import { TNodeJModel, useStore } from "./Stord";
import '@xyflow/react/dist/style.css';


type Props = {}

export default function JsonModel({ }: Props) {
	const { initialNodes, initialEdges, initNodeTypes } = useStore()
	const [nodes, setNodes, onNodesChange] = useNodesState<Node<TNodeJModel>>([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	const nodeTypes = useMemo(() => initNodeTypes, []);

	useEffect(() => {
		document.querySelector('.react-flow__panel.react-flow__attribution')?.remove()
	}, [])

	useEffect(() => {
		setNodes(initialNodes)
		setEdges(initialEdges as any)
	}, [initialNodes, initialEdges])

	return (
		<div className="w-full h-[calc(100vh-7rem)] ">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				// onConnect={onConnect}
			>
				<Controls />
				<MiniMap />
				<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
			</ReactFlow>
		</div>
	)
}
