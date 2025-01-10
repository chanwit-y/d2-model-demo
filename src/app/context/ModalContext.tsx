"use client";

import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react'

type TModal = {
	show: () => void
}

type ModalContextType = {
	add: (k: string, c: ReactNode) => void
	show: (k: string) => void
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType)

type InitModal = {
	k: string,
	c: ReactNode
}

type Props = {
	children: ReactNode
	initModal: InitModal[]
}

// const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement

const Modal = ({ children, initModal = [] }: Props) => {


	const [inits, setInits] = useState<InitModal[]>(initModal)
	const [isShow, setIsShow] = useState(false)

	// const show = useCallback(() => {
	// 	const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement
	// 	if (modal)
	// 		modal.showModal()
	// 	else console.error(`Modal with id not found`)
	// }, [])

	const [content, setContent] = useState<ReactNode | null>(null)


	const add = useCallback((k: string, c: ReactNode) => {
		setInits([...inits, { k, c }])
		// setContent(c)

		// return {
		// 	show: () => {
		// 		const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement
		// 		if (modal)
		// 			modal.showModal()
		// 		else console.error(`Modal with id not found`)
		// 	}
		// }
	}, [])

	const show = useCallback((k: string) => {
		setContent(inits.find(i => i.k === k)?.c || null)
		setIsShow(true)

		// const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement
		// if (modal)
		// 	modal.showModal()
		// else console.error(`Modal with id not found`)
	}, [inits])




	useEffect(() => {
		const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement
		if (modal) {
			if (isShow)
				modal.showModal()
			else modal.close()
		} else console.error(`Modal with id not found`)
	}, [content, isShow])



	return (
		<ModalContext value={{ add, show }}>
			<dialog id="modal" className="modal">
				<div className="modal-box">
					<h3 className="text-lg font-bold">Hello!</h3>
					{content}
					<div className="modal-action">
						<button className="btn" onClick={() => setIsShow(false)}>Close</button>
					</div>
				</div>
			</dialog>
			{children}
		</ModalContext>
	)
}

export default Modal;
export { ModalContext }