"use client";

import { Context, createContext, ReactNode, useCallback, useState } from "react"

type contextType<T> = {
	val: number,
	sum: (a: number, b: number) => void,
	data: T
}


export function createCtx<T>() {
	return createContext<contextType<T>>({} as contextType<T>)
}


type Props = {
	children: ReactNode
}

export function getProvider<T>(Ctx: Context<contextType<T>>) {
	return function Provider({ children }: Props) {
		const [data] = useState<T>({} as any)
		const [val, setVal] = useState(0)
		const sum = useCallback((a: number, b: number) => setVal(a + b), [])

		return <Ctx value={{ val, sum,  data }}>
			<p>
				Provider Value: {val}
			</p>
			{children}
		</Ctx>
	}
}

// export const ContextKavisara = createContext({} as contextType)
// export const Provider = ({ children }: Props) => {
// 	const [val, setVal] = useState(0)
// 	const sum = useCallback((a: number, b: number) => setVal(a + b), [])

// 	return <ContextKavisara value={{ val, sum }}>
// 		<p>
// 			Provider Value: {val}
// 		</p>
// 		{children}
// 	</ContextKavisara >
// }

