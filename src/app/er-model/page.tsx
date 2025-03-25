'use client'
import React, { useCallback, useMemo } from 'react';
import {
	ReactFlow,
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
	BackgroundVariant,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { EntityNode } from '../components/ERModle/EntityNode';

const initialNodes = [
	{ id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
	{ id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
	{
		id: 'node-1',
		type: 'textUpdater',
		position: { x: 0, y: 0 },
		data: { value: 123 },
	},
];
const initialEdges = [
	{ id: 'e1-2', source: '1', target: '2' }, 
	{ id: 'e2-1', source: '2', target: 'node-1', targetHandle: 'a' },
	{ id: 'e2-2', source: '2', target: 'node-1', targetHandle: 'b' }
];


export default function App() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


	const nodeTypes = useMemo(() => ({ textUpdater: EntityNode }), []);

	const onConnect = useCallback(
		(params: any) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);

	return (
		<div style={{ width: '100vw', height: '80vh' }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			>
				<Controls />
				<MiniMap />
				<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
			</ReactFlow>
		</div>
	);
}