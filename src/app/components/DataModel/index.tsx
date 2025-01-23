"use client";

import React from 'react'
import { Provider } from './Context'
import data from './data.json'
import { NodeList } from './NodeList'
import { IField } from './@types';

export const DataModel = () => {
	return (
		<Provider init={data.model.fields as IField[]}>
			{(init) => (
				<div className='flex flex-col p-6'>
					{/* <pre>
						{JSON.stringify(init["0"], null, 2)}
					</pre> */}

					<input className='input input-bordered input-sm' type="text" />


					{/* {
					data.model.fields.map((field, index) => {
						return (<Node field={field as IField} key={index} />) 
					})
				} */}
					<NodeList fields={init["0"] ?? []} mapId={''} />


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


					{/* <div className='flex '>
					<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-5'></div>
					<button className='mt-2 btn btn-xs btn-circle btn-outline btn-success'>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
					</button>
				</div> */}
				</div>
			)}
		</Provider>
	)
}
