import React, { useEffect, useMemo } from 'react'
import { listJson } from './action'
import { FileItem } from './FileItem'

import { useAwait } from '@/app/hook/useAwait'
import { useStore } from './Stord'

export default function FileList() {

	const { data: files } = useAwait<any[]>(listJson)
	const  currentFile  = useStore((state) => state.currentFile);

	// const files = useMemo(async () => {
	// 	const res = await listJson()
	// 	return res
	// }, [])




	useEffect(() => {
		console.log("currentFile", currentFile)
	}
	, [currentFile])

	return (
		<div className="drawer-side">
			<label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>


			<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

				<h2 className="py-2 text-lg font-bold">{`{JSON}`}</h2>
				<hr className='my-2 border-gray-600' />


				{/* Sidebar content here */}
				{
					(files ?? []).map((f, i) => (
						<li key={i} className='my-1'>
							<FileItem title={f} isActive={currentFile === f} />
						</li>
					))
				}


			</ul>
		</div>
	)
}
