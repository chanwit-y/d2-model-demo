import { createCtx, getProvider } from "."

type Example = {
	name: string,
	age: number,
}

type Example2 = {
	age: number,
}

export const ctx = createCtx<Example>()
export const ctx2 = createCtx<Example2>()



export const Prv = getProvider(ctx)
export const Prv2 = getProvider(ctx2)