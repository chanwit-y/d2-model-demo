"use client"

import { TObject, Type, type Static } from '@sinclair/typebox'
import { createContext, ReactNode, Context, use, useState, useEffect, useMemo } from 'react'

// const config = {
// 	useModal1: {
// 		title: "Modal 1",
// 		param: Type.Object({}),
// 		content: ({ ok, cancel, param }: any /** state */) => <div>Modal 1</div> /** Component for modal sent state content to props  */,
// 		action: {
// 			ok: ({ param }: any  /** state */) => console.log("ok"),
// 			cancel: ({ param }: any  /** state */) => console.log("cancel"),
// 		},
// 	},
// 	useModal2: {},
// }

// const x = (<ModalFactory config={config} >
// 	         ...
// 	      </ModalFactory>)

// const { show } = useModal1({...})


// TODO: Create content for message box and confirm box


// type TContext<T> = {
// 	hook: T
// }

type TConfig = {
	title: string,
	param: TObject,
	content: ReactNode,
}

type Config = {
	[key: string]: TConfig
}

type HookResult<P> = {
	show: (p: P) => void
	setTitle: (title: string) => void
}
type Hook<P> = () => HookResult<P>
type TContext<C extends Config> = { [K in keyof C]: Hook<Static<C[K]["param"]>> }

function createModal<C extends Config>(c: C): {
	Provider: ({ children }: { children: ReactNode }) => ReactNode,
	Ctx: Context<TContext<C>>
} {

	const registers: Record<string, ReactNode> = Object.keys(c).reduce((acc: Record<string, ReactNode>, key: string) => {
		acc[key] = c[key].content
		return acc
	}, {})

	console.log(registers)

	const Ctx = createContext({} as TContext<C>)

	// create hook for each modal

	const Provider = ({ children }: { children: ReactNode }) => {
		const [reg, setReg] = useState<Record<string, ReactNode>>(registers)
		const [isShow, setIsShow] = useState(false)
		const [current, setCurrent] = useState<string>("")

		const hook = Object.keys(c).reduce((_acc, key) => {

			(_acc as any)[key] = () => {
				return {
					show: (p: { [key: string]: any }) => {
						console.log(`Showing modal ${key} with params`, p)

						// setContent(inits.find(i => i.k === k)?.c || null)
						setIsShow(true)
						setCurrent(key)
					},
					setTitle: (title: string) => {
						console.log(`Setting title of modal ${key} to ${title}`)
					}
				}
			}

			return _acc
		}, {} as TContext<C>)

		const content = useMemo(() => registers[current], [registers, current])


		useEffect(() => {
			const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement
			if (modal) {
				if (isShow)
					modal.showModal()
				else modal.close()
			} else console.error(`Modal with id not found`)
		}, [isShow])

		console.log("hook", hook)

		return <Ctx value={{ ...hook }}>
			<dialog id="modal" className="modal">
				<div className="modal-box">
					<h3 className="text-lg font-bold">Hello!</h3>
					{/* {content} */}
					{/* <div className="modal-action">
						<button className="btn" onClick={() => setIsShow(false)}>Close</button>

					</div> */}
					{content}
					<button className="btn" onClick={() => setIsShow(false)}>Close</button>
				</div>
			</dialog>
			{children}
		</Ctx>
	}



	return { Provider, Ctx }
}





export const { Provider, Ctx } = createModal({
	modal1: {
		title: "Modal 1",
		param: Type.Object({
			name: Type.String(),
			age: Type.Number()
		}),
		content: <div>Modal 1</div>,
	},
	modal2: {
		title: "Modal 2",
		param: Type.Object({
			age: Type.Number()
		}),
		content: <div>Modal 2</div>,
	},
})

// export const {  useModal1, useModal2 }  = use(Ctx)
// export const hook = () => use(Ctx)

// const X = () => {
// 	return (<Provider>
// 		<>

// 		</>
// 	</Provider>)
// }


// const A = () => {
// 	const { show } = useModal1()	
// 	return (
// 		<div>
// 			<button onClick={() => show({ name: "John", age: 20 })}>Show</button>
// 		</div>
// 	)
// }

// const { Provider, hook } = createModal({
// 	useModal1: {
// 		title: "Modal 1",
// 		param: Type.Object({
// 			name: Type.String(),
// 			age: Type.Number()
// 		}),
// 		content: <div>Modal 1</div>,
// 	},
// 	useModal2: {
// 		title: "Modal 2",
// 		param: Type.Object({
// 			age: Type.Number()
// 		}),
// 		content: <div>Modal 2</div>,
// 	},
// })
// const { useModal1 } = hook

// const { show } = useModal1()
// show({ name: "John", age: 20 })

// const context = createContext({} as any)
// function createModal<C extends Config>(c: C): { [K in keyof C]: Hook<Static<C[K]["param"]>> } {



//  useModal1({ name: "John" })
//  useModal2({ age: "x" })