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
import Provider from '../components/ERModle/Context';


export default function App() {

	return (
		<div style={{ width: '100vw', height: '80vh' }}>
			<Provider>
				{

					(nodes, onNodesChange, edges, onEdgesChange, nodeTypes, onConnect) => {
						return (
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

						)
					}
				}
			</Provider>
		</div>
	);
}