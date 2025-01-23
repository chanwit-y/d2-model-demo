"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, use, useCallback, useEffect, useState } from "react"
import { IField } from "./@types";
import { flatten } from "lodash";


type TContext = {
	idIsMap: Record<string, IField[]>
	setIdIsMap: Dispatch<SetStateAction<Record<string, IField[]>>>
	addSubField: (id: string, field: IField) => void
}

const Context = createContext<TContext>({} as TContext)

type Props = {
	children: (init: Record<string, IField[]>) => ReactNode
	init: IField[]
}

const Provider = ({ children, init }: Props) => {

	// inintialize level 0 
	const [idIsMap, setIdIsMap] = useState<Record<string, IField[]>>({})

	const addSubField = useCallback((id: string, field: IField) => {
		setIdIsMap(prev => ({ ...prev, [id]: [...prev[id], field] }))
	}, [])


	useEffect(() => {
		// console.log('fields', fields)

		setIdIsMap(prev => ({ ...prev, ["0"]:  [...init] }))
	}, [init])

	return <Context value={{ idIsMap, setIdIsMap, addSubField }}>
		{/* <pre>
			{JSON.stringify(idIsMap, null, 2)}
		</pre> */}
		{children(idIsMap)}
	</Context>
}

const useModel = () => use(Context)

export { Context, Provider, useModel }