'use client'

import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'


type Props = {
	title: string
	index: number
	indexActive: number
	onActive: Dispatch<SetStateAction<number>>
	children: ReactNode
}

export const ModelCatagory = ({ title, index, indexActive, onActive, children }: Props) => {
	// const [isActive, setIsActive] = useState(1)

	const handleActive = () => {
		onActive(index)
	}
	return (
		<div className="collapse collapse-arrow bg-base-200 mb-2" >
			<input type="radio" name="my-accordion-2" checked={indexActive === index} onChange={handleActive} />
			<div className="collapse-title text-md font-semibold">{title}</div>
			<div className="collapse-content">
				{children}
			</div>
		</div>
	)
}
