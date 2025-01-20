"use client";

import React from 'react'
import { Provider } from './Context'
import { MdiPlusCircleOutline } from '../asset/icon/PlusCircleOutlineIcon';
import { Field } from './Field';

export const DataModel = () => {
	return (
		<Provider>
			<div className='flex flex-col p-6'>
				<Field />
				<div className=''>
					<div className='flex '>

						<div className=''>
							<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-11'></div>
							<div className='ml-6  border-l  border-dashed border-gray-500 w-5 h-4'></div>
						</div>

						<Field />
			
					</div>


				</div>
				<div className=''>
					<div className='flex '>

						<div className=''>
							<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-11'></div>
							{/* how to check length of hight + 4 */}
							<div style={{height: "8.5rem"}} className='ml-6  border-l  border-dashed border-gray-500 w-5'></div>
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




					{/* when data type is map */}
					<div className='flex'>
						<div className='ml-6 border-l border-dashed border-gray-500 h-10'></div>
						<div style={{marginLeft: '2.7rem'}} className='  border-l border-b border-dashed border-gray-500 w-5 h-5'></div>
						<button className='mt-2 btn btn-xs btn-circle btn-outline btn-success'>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
						</button>
					</div>


					
				</div>



				<div className='flex '>
					<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-5'></div>
					<button className='mt-2 btn btn-xs btn-circle btn-outline btn-success'>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
					</button>
				</div>
			</div>
		</Provider>
	)
}
