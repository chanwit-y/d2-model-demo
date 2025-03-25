
import { Handle, Position } from '@xyflow/react'
import React from 'react'
import { DragIndicator } from '../asset/icon/DragIndicator'

export default function ColumnItem() {
	return (
		<div className='flex py-2 flex-col'>
			<div className='flex bg-red-600'>
				<Handle id='a' type="target" style={{
					position: 'relative',
					top: 12,
					left: 0,
					width: 20,
					height: 20,
					paddingTop: 4,
					paddingLeft: 1,
					backgroundColor: 'blue',
					borderRadius: 5,
					color: 'white',
					fontSize: 9,
					letterSpacing: 1,
				}} position={Position.Left}>
					<div className=' text-center'>PK</div>
				</Handle>

				<div className='flex relative -left-3 items-center'>
					<div className=' text-white cursor-move'>
						<DragIndicator />
					</div>
					<span>Hi</span>
					<span>xxHi</span>
				</div>

			</div>
		</div>
	)
}
