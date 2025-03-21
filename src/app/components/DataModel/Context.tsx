"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, use, useCallback, useEffect, useState } from "react"
import { IField } from "./@types";
import { FormProvider, useFieldArray, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fieldSchema, modelSchema, TField, TModel } from "./schema";


type TContext = {
	// idIsMap: Record<string, IField[]>
	// setIdIsMap: Dispatch<SetStateAction<Record<string, IField[]>>>
	// addSubField: (id: string, field: IField) => void
}

const Context = createContext<TContext>({} as TContext)

type Props = {
	children: (root: TField[], name: string, register: UseFormRegister<TModel>) => ReactNode
	// children:  ReactNode
	init: IField[]
	data: TModel;
}

const Provider = ({ children, data }: Props) => {

	const f = useForm({
		resolver: zodResolver(modelSchema,),
		defaultValues: data,
		mode: 'all'
	})

	// f.register

	const { fields } = useFieldArray({
		control: f.control, // control props comes from useForm (optional: if you are using FormProvider)
		name: "model.fields", // unique name for your Field Array

	});


	return <Context value={{}}>
		<FormProvider {...f}>
			<button onClick={f.handleSubmit((d) => { 
				console.log(d)
			})}>Get Values</button>
			{children(fields, 'model.fields', f.register)}
		</FormProvider>
	</Context>
}

const useModel = () => use(Context)

export { Context, Provider, useModel }