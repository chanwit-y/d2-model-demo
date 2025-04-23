"use client"

import { createContext, ReactNode, Context, use, useState, useEffect, useMemo, ComponentType, createElement } from 'react'
import { TLiteral, TObject, Type, type Static } from '@sinclair/typebox'

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

// type TContentWithParam<T> = (param: T) => ReactNode

type TConfig = {
	title: string,
	param: TObject,
	content: ComponentType<any>,
}

type Config = {
	[key: string]: TConfig
}

// type Config2<T extends Config, U extends Extract<keyof Config, string>> = {
// 	[K in U]: T[K] & {
// 		contentWithParam?: (param: Static<T[K]["param"]>) => ReactNode
// 	}
// }

type HookResult<P> = {
	show: (p: P) => void
	setTitle: (title: string) => void
}
type Hook<P> = () => HookResult<P>
type TContext<C extends Config> = {
	m: { [K in keyof C]: Hook<Static<C[K]["param"]>> };
	params?: { [K in keyof C]: Static<C[K]["param"]> };
};

// function createModal<C extends Config>(c: C): {
// 	Provider: ({ children }: { children: ReactNode }) => ReactNode,
// 	Ctx: Context<TContext<C>>,
// } & { [K in keyof C]: Hook<(C[K]["param"] & {
// 	params: [];
// })["static"]>; } {

type ModalOptions = {
	providerName?: TLiteral | undefined
}

type ProviderProps<O extends ModalOptions> = O extends ModalOptions ?
	O["providerName"] extends TLiteral
	? Static<O["providerName"]> extends string
	? {
		[`P`]: ({ children }: { children: ReactNode }) => ReactNode
	} : never
	: never
	: never;

type X<O extends ModalOptions> = O["providerName"] extends infer U ? U extends TLiteral ? Static<U> extends string ? U : ""
	: "" : ""


const x = <O extends ModalOptions>(o: O): { [K in O["providerName"] extends TLiteral ? `X${Extract<Static<O["providerName"]>, string>}` : never]: any } => {
	return {} as any
}

const y = x({ providerName: Type.Literal("XModal") })

y.XXModal





export function createModal<C extends Config, O extends ModalOptions = {}>(c: C, options?: O): {
	// Provider: ({ children }: { children: ReactNode }) => ReactNode,
	Ctx: Context<TContext<C>>,
	modals: () => { [K in keyof C]: Hook<Static<C[K]["param"]>> },
	params: () => { [K in keyof C]: (C[K]["param"] & {
		params: [];
	})["static"]; } | undefined,
} & { [K in O["providerName"] extends TLiteral
	? `Provider${Extract<Static<O["providerName"]>, string>}`
	: "Provider"]
	: ({ children }: { children: ReactNode }) => ReactNode } {

	const registers = Object.keys(c).reduce((acc: Record<string, ComponentType<any>>, key: string) => {
		acc[key] = c[key].content
		return acc
	}, {})


	const Ctx = createContext({} as TContext<C>)

	// create hook for each modal

	const Provider = ({ children }: { children: ReactNode }) => {
		// const [reg, setReg] = useState<Record<string, ReactNode>>(registers)

		const [isShow, setIsShow] = useState(false)
		const [current, setCurrent] = useState<string>()
		const [params, setParams] = useState<{ [K in keyof C]: Static<C[K]["param"]> }>()

		const m = Object.keys(c).reduce((_acc, key) => {

			(_acc as Record<string, any>)[key] = () => {
				return {
					show: (p: Record<string, any>) => {
						console.log(`Showing modal ${key} with params`, p)

						// setContent(inits.find(i => i.k === k)?.c || null)
						setParams(prev => ({ ...prev, [key]: p } as { [K in keyof C]: Static<C[K]["param"]> }))
						setIsShow(true)
						setCurrent(key)
					},
					setTitle: (title: string) => {
						console.log(`Setting title of modal ${key} to ${title}`)
					}
				}
			}

			return _acc
		}, {} as { [K in keyof C]: Hook<Static<C[K]["param"]>> })

		const content = useMemo(() => current ? registers[current] : null, [registers, current])


		useEffect(() => {
			const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement
			if (modal) {
				if (isShow)
					modal.showModal()
				else modal.close()
			} else console.error(`Modal with id not found`)
		}, [isShow])

		// console.log("hook", hook)

		return <Ctx value={{ m, params }}>
			<dialog id="modal" className="modal">
				<div className="modal-box">
					<h3 className="text-lg font-bold">Hello!</h3>
					{/* {content} */}
					{/* <div className="modal-action">
						<button className="btn" onClick={() => setIsShow(false)}>Close</button>

					</div> */}
					{/* {content ?? <span>No Content</span>} */}
					{content ? createElement(content, { ...(params ? params[current as Extract<keyof C, string>] : {}) }) : null}
					{/* {content && typeof content === "function" ? content({ ...param }) : content ?? <span>No Content</span>} */}
					<button className="btn" onClick={() => setIsShow(false)}>Close</button>
				</div>
			</dialog>
			{children}
		</Ctx>
	}

	// type A = {
	// 	Provider: ({ children }: {
	// 		children: ReactNode;
	// 	}) => JSX.Element;
	// 	Ctx: Context<TContext<C>>;
	// } & { [K in keyof C]: Hook<(C[K]["param"] & {
	// 	params: [];
	// })["static"]>; }

	const modals = () => {
		return use(Ctx).m
	}

	const params = () => {
		return use(Ctx).params
	}

	console.log(`Provider${options?.providerName}`)

	return {
		Ctx,
		modals,
		params,
		[options?.providerName ? `Provider${options.providerName.const}`: "Provider"]: Provider,
		// ...(options?.providerName
		// 	? { [`Provider${options.providerName}`]: Provider }
		// 	: { Provider }),
	} as any 
}









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