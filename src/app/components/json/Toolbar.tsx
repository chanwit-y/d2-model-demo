'use client'
import { modals } from '@/app/lib/config/modal'
import { IxImport } from '../asset/icon/IxImport'
import { ListAltOutLineSharp } from '../asset/icon/ListAltOutLineSharp'

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

				<button className="btn btn-outline btn-sm btn-info btn-square"
				onClick={() => show({})}
				>
					<IxImport />
				</button>
			</div>

			<div className='flex gap-2'>

				<div className="drawer drawer-end z-10">
					<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content">
						{/* Page content here */}
						<label htmlFor="my-drawer-4" className="drawer-button btn btn-outline btn-sm btn-square">
							<ListAltOutLineSharp />
						</label>
					</div>
					<div className="drawer-side">
						<label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
						<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
							{/* Sidebar content here */}
							<li><a>Sidebar Item 1</a></li>
							<li><a>Sidebar Item 2</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
