import { useCallback, useEffect, useMemo } from "react"
import { addEdge, Background, BackgroundVariant, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import { useStore } from "./Stord";
import '@xyflow/react/dist/style.css';

type Props = {}

export default function JsonModel({ }: Props) {

	const { initialNodes, initialEdges, initNodeTypes } = useStore()

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const nodeTypes = useMemo(() => initNodeTypes, []);


	useEffect(() => {
		document.querySelector('.react-flow__panel.react-flow__attribution')?.remove()
	}, [])

	const onConnect = useCallback(
		(params: any) => setEdges((eds) => addEdge(params, eds)),
		[],
	);

	return (
		<div className="w-full h-[calc(100vh-4rem)] ">
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
