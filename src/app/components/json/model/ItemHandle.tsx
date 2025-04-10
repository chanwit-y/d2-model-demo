import { Handle, Position } from '@xyflow/react'
import React from 'react'

type Props = {
	id: string
	position: Position
}

export const ItemHandle = ({id, position}: Props) => {
	return (
		<Handle id={id}
			type={position === Position.Left ? "target" : "source"}
			// className=' bg-blue-500'
			style={{
				position: 'absolute',
				// top: 12,
				right: position === Position.Right ? 14 : undefined,
				left: position === Position.Left ? 14 : undefined,
				width: 20,
				height: 20,
				// paddingTop: 4,
				// paddingLeft: 1,
				// backgroundColor: 'blue',
				backgroundColor: "rgb(59 130 246)",
				borderRadius: 5,
				color: 'white',
				fontSize: 9,
			}} position={position} />
	)
}
