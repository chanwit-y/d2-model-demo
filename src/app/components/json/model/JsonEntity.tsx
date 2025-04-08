import React from 'react'
import { Position } from '@xyflow/react'
import { ItemHandle } from './ItemHandle'

type Props = {
	data: Record<string, any>
}

export const JsonEntity = ({ data }: Props) => {

	// useEffect(() => {
	// 	console.log(json2Flow(data, "batch"))
	// }, [data])

	return (
		<div className='p-2 bg-white'>
			<div className='flex relative'>
				<span className=' px-2 font-bold text-lg text-black tracking-wide '>{data.model.name}</span>
				{data.model.targetHandle && data.model.targetHandle !== ""
					&& <ItemHandle
						id={data.model.targetHandle}
						position={Position.Left} />
				}
			</div>
			<hr className='my-2 text-gray-500' />
			<div className='flex flex-col gap-2'>
				{
					data.model.fields.map((item: any, index: number) =>
					(<div key={`jsonItem-${index}`} className='flex relative '>
						<span>
							{item.name}
						</span>
						{item.sourceHandle && item.sourceHandle !== ""
							&& <ItemHandle
								id={item.sourceHandle}
								position={Position.Right} />
						}
					</div>))
				}
			</div>
		</div>
	)
}
