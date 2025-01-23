import React, { useEffect, useMemo } from 'react'
import { Node } from './Node'
import { IField } from './@types'
import { useModel } from './Context'
import { flatten, map } from 'lodash'



type Props = {
	mapId: string
	fields: IField[]
}


export const NodeList = ({ fields, mapId }: Props) => {

	const { setIdIsMap, idIsMap } = useModel()

	// const roots = useMemo(() => Object(idIsMap) ?? [], [idIsMap])

	// const roots = useMemo(() => {
		
	// 	return fields?.map((field, index) => {
	// 		setIdIsMap(prev => ({ ...prev, ["0"]: [...prev["0"], field] }))
	// 		return (<Node field={field as IField} key={index} />)
	// 	})
	// }, [])

	// useEffect(( ) => {
	// 	console.log('idIsMap', idIsMap["0"])
	// }, [idIsMap])


	return (
		<div>
{/* <pre>
	{JSON.stringify(idIsMap, null, 2)}
</pre> */}
			{/* {roots} */}
			{
				fields?.map((field, index) => {
					return (<Node field={field as IField} key={index} />)
				})
			}


			{/* <Node count={data.model.fields.length - 1} sub={0} fields={data.model.fields ?? []} /> */}

			{/* <Node count={2} sub={1} /> */}

			{/* <div className=''>
					<div className='flex '>

						<div className=''>
							<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-11'></div>
							<div style={{ height: "8.5rem" }} className='ml-6  border-l  border-dashed border-gray-500 w-5'></div>
						</div>

						<div className='mt-1'>
							<Field />

							<div className='flex'>

								<div className=''>
									<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-11'></div>
									<div className='ml-6  border-l  border-dashed border-gray-500 w-5 h-4'></div>
								</div>

								<div className='mt-1'>
									<Field />

								</div>
							</div>



							<div className='flex'>

								<div className=''>
									<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-11'></div>
									<div className='ml-6  border-l  border-dashed border-gray-500 w-5 h-4'></div>
								</div>

								<div className='mt-1'>
									<Field />

								</div>
							</div>

						</div>



					</div>




					<div className='flex'>
						<div className='ml-6 border-l border-dashed border-gray-500 h-10'></div>
						<div style={{ marginLeft: '2.7rem' }} className='  border-l border-b border-dashed border-gray-500 w-5 h-5'></div>
						<button className='mt-2 btn btn-xs btn-circle btn-outline btn-success'>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
						</button>
					</div>



				</div>
 */}


			<div className='flex '>
				<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-5'></div>
				<button className='mt-2 btn btn-xs btn-circle btn-outline btn-success'
					onClick={() => {
						console.log(mapId)
						const key = mapId === "" ? "0" : mapId
						const newIdIsMap: IField = {
							id: "1",
							name: "newField",
							type: "string",
							fields: []
						}
						setIdIsMap(prev => ({ ...prev, [key]: [...prev[key], newIdIsMap] }))
						console.log("idIsMap[key]", idIsMap[key])
						// setIdIsMap(prev => ({ ...prev, [key]:  }))
						console.log('add to', key === "" ? "0" : key)
					}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
				</button>
			</div>
		</div>
	)
}
