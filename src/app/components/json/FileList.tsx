import React, { useEffect } from 'react'
import { listJson } from './action'

export const FileList = () => {

	useEffect(() => {
		listJson()
	}, [])

	return (
		<div className="drawer-side">
			<label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>


			<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

				<h2 className="py-2 text-lg font-bold">{`{JSON}`}</h2>
				<hr className='my-2 border-gray-600' />

				{/* Sidebar content here */}

				<li className='my-1'>
					<div className='flex justify-between items-center active'>
						<span className="text-sm">Sidebar Item 1</span>
						<button className="btn btn-sm btn-ghost btn-circle">_/</button>
					</div>
				</li>

				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
				<li className='my-1'><a className="">Sidebar Item 1</a></li>
			</ul>
		</div>
	)
}
