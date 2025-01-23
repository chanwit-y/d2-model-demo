"use client";

import React, { memo, useEffect, useMemo, useState } from 'react'
import { Field } from './Field'
import { NodeList } from './NodeList'
import { useModel } from './Context';
import { IField } from './@types';



type Props = {
	// count: number
	// sub: number
	field: IField
}

export const Node = memo(({ field }: Props) => {
	const { idIsMap, setIdIsMap } = useModel()
	// const [current, setCurrent] = useState<IField>()

	useEffect(() => {
		if (field?.type === 'map') {
			// setCurrent(field)

			setIdIsMap(prev => ({ ...prev, [field.id]: field.fields }))
		}
	}, [field])

	const current = useMemo(() => idIsMap[field.id], [idIsMap, field.id]) 

	const subNode = useMemo(() => {
		if (field.type === 'map') {
			// setLevel(prev => prev + 1)
			// console.log('field.id', field.id)
			return (<div className='ml-6 border-l border-dashed border-gray-500'>

				<div className='ml-6'>
					<NodeList fields={current ?? []} mapId={field.type === "map" ? field.id : ""} />


				</div>
			</div>)
		}
	}, [current, field.type])


	return (
		<div className=''>
			<div className='flex '>

				<div className=''>
					<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-11'></div>
					<div className='ml-6  border-l  border-dashed border-gray-500 w-5 h-4'></div>
				</div>

				<Field field={field} />


			</div>
			{subNode}

			{/* {
				field?.type === 'map' && <div className='ml-6 border-l border-dashed border-gray-500'>

					<div className='ml-6'>
						<NodeList fields={field.fields} />


					</div>
				</div>
			} */}
			{/* {sub > 0 && <div className='ml-6 border-l border-dashed border-gray-500'>


				<div className='ml-6'>
					<Node count={4} sub={sub - 1}  />


				</div>

				<div className='flex'>
					<div  className='ml-12  border-l border-b border-dashed border-gray-500 w-5 h-5'></div>
					<button className='mt-2 btn btn-xs btn-circle btn-outline btn-success'>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
					</button>
				</div>
			</div>} */}




			{/* {
				end > 0 && <Node count={end - 1} sub={0} />
			} */}



		</div>
	)
})
