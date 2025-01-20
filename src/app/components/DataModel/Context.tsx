import { createContext, ReactNode } from "react"

type TContext = {}

const Context = createContext<TContext>({} as TContext)

type Props = {
	children: ReactNode
}

const Provider = ({ children }: Props) => {
	return <Context value={{}}>{children}</Context>
} 

export { Context, Provider }