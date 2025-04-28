import React, { useCallback } from 'react'
import { useStore } from './Stord'
import { Delete } from '../asset/icon/Delete'

type Props = {
	title: string
	isActive: boolean
}

export const FileItem = ({ title, isActive }: Props) => {

	const { onSelectedJsonFile } = useStore()

	const handleClick = useCallback(() => {
		onSelectedJsonFile(title)
	}, [title])

	return (
		<div className={`flex justify-between items-center ${isActive ? "active" : ""}`}
		onClick={handleClick}>
			<span className="text-sm">{title}</span>
			<button className="btn btn-sm btn-ghost btn-circle text-error">
				<Delete width={20} height={20}  />
			</button>
		</div>
	)
}
