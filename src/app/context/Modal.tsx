"use client";

import React, { createContext, ReactNode, useState } from 'react'

type ModalContextType = {
	showModal: (id: string) => void
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType)

type Props = {
	children: ReactNode
}

const Modal = ({  children }: Props) => {

	const [id, setId] = useState("")

	const showModal = (id: string) => {
		setId(id)
		console.log(id);


		const modal: HTMLDialogElement = document.getElementById(id) as HTMLDialogElement
		console.log(modal);
		modal?.showModal()
	}
	return (
		<ModalContext value={{ showModal }}>
			<dialog id={id} className="modal">
				<div className="modal-box">
					<h3 className="text-lg font-bold">Hello!</h3>
					<p className="py-4">Press ESC key or click the button below to close</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
			{children}
		</ModalContext>
	)
}

export default Modal;
export { ModalContext }