'use client'
import { modals } from '@/app/lib/config/modal'
import { IxImport } from '../asset/icon/IxImport'
import { ListAltOutLineSharp } from '../asset/icon/ListAltOutLineSharp'
import FileList from './FileList'
import { SwichResult } from './ButtonGroup'
import { Play } from '../asset/icon/Play'
import { useStore } from './Stord'
import { useCallback, useMemo } from 'react'
import { useAwaitLoader } from '../Loader'

export const Toolbar = () => {
	// const { open, close } = useLoader();
	const { awaitLoader } = useAwaitLoader()
	const { show } = modals().jsonEditorModal()
	const { activeButtonType, call, setActiveButtonType } = useStore()


	const canPlay = useMemo(() => activeButtonType === "request", [activeButtonType])

	const playHandler = useCallback(() => awaitLoader([call, () => setActiveButtonType("response")]),
		[call, setActiveButtonType])

	return (
		<div className='flex justify-between p-4'>
			<div className='flex gap-2'>

				<button className="btn btn-outline btn-sm  btn-square"
					onClick={() => show({})}
				>
					<IxImport />
				</button>

				<button
					className="btn btn-outline btn-sm  btn-square"
					disabled={!canPlay}
					onClick={playHandler}
				>
					<Play />
				</button>
			</div>


			<div className='flex gap-2  '>

				<SwichResult />


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
