'use client'
import { modals } from '@/app/lib/config/modal'
import { IxImport } from '../asset/icon/IxImport'
import { ListAltOutLineSharp } from '../asset/icon/ListAltOutLineSharp'
import FileList from './FileList'

export const Toolbar = () => {
	const { show } = modals().jsonEditorModal()
	// const { show } = modals().modal2()

	// const x = useMemo(() => getModal().param?.modal1, []) 
	// const { show } = modal1()

	// useEffect(() => {
	// 	console.log("x", x)
	// }, [x])


	return (
		<div className='flex justify-between p-4'>
			<div className='flex gap-2'>

				<button className="btn btn-outline btn-sm  btn-square"
					onClick={() => show({})}
				>
					<IxImport />
				</button>
			</div>


			<div className='flex gap-2  '>

				<div className='flex gap-2'>
					<button className="btn btn-dash btn-info btn-sm">Request</button>
					<button className="btn btn-ghost  btn-sm">Respont</button>
				</div>



				<div className="drawer drawer-end z-10">
					<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content">
						{/* Page content here */}
						<label htmlFor="my-drawer-4" className="drawer-button btn btn-outline btn-sm btn-square">
							<ListAltOutLineSharp />
						</label>
					</div>
					<FileList />
				</div>
			</div>

		 </div>
	)
}
