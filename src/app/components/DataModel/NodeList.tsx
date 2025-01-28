import React, { useEffect, useMemo } from 'react'
import { Node } from './Node'
import { IField } from './@types'
import { useModel } from './Context'
import { useFieldArray, useFormContext } from 'react-hook-form'

type Props = {
	fields: IField[]
	name: string
}

export const NodeList = ({  name }: Props) => {

	const { fields,  append } = useFieldArray({
		control: useFormContext().control, // control props comes from useForm (optional: if you are using FormProvider)
		name: `${name}`, // unique name for your Field Array
	})

	
	return (
		<div>
			{
				fields?.map((field, index) => {
					return (<Node field={field as IField} name={`${name}.${index}`} key={index} />)
				})
			}

			<div className='flex '>
				<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-5'></div>
				<button className='mt-2 btn btn-xs btn-square btn-outline btn-success'
					onClick={() => {
						const newIdIsMap: IField = {
							id: "1",
							name: "newField",
							type: "string",
							fields: []
						}
						append(newIdIsMap)
					}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
				</button>
			</div>
		</div>
	)
}
