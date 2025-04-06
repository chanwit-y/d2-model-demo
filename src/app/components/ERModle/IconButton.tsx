import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
	onClick: () => void
}

export default function IconButton({
	children,
	onClick
}: Props) {
	return (
		<div onClick={onClick} className='border  rounded-sm p-1 cursor-pointer bg-blue-50 border-blue-400'>
			{children}
		</div>

	)
}
