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
		<div className='bg-white rounded-md overflow-hidden '>
			<div className='flex relative bg-blue-200 py-2  '>
				<span className=' px-7 font-bold text-lg text-black tracking-wide '>{data.model.name}</span>
				{data.model.targetHandle && data.model.targetHandle !== ""
					&& <ItemHandle
						id={data.model.targetHandle}
						position={Position.Left} />
				}
			</div>
			<div className='flex flex-col '>
				{
					data.model.fields.map((item: any, index: number) =>
					(<div key={`jsonItem-${index}`} className='grid grid-cols-2 relative cursor-pointer '>

						<span className='p-2 font-bold bg-slate-100 text-sm text-black tracking-wide border-r border-dashed border-blue-400  '>
							{item.name}
						</span>
						<span className='p-2 px-4 font-bold text-sm  text-gray-700  tracking-wide min-w-40'>{String(item.value)}</span>

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
