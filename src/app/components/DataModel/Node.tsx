"use client";

import React, { useMemo } from 'react'
import { Field } from './Field'
import { NodeList } from './NodeList'
import { TField } from './schema';
import { useFormContext } from 'react-hook-form';



type Props = {
	// count: number
	// sub: number
	field: TField
	name: string
}

export const Node = ({ field, name }: Props) => {
	
	const { watch } = useFormContext()

	const type = watch(`${name}.type`)
	const subFields = watch(`${name}.fields`)

	const subNode = useMemo(() => {
		if (type === 'map') {

			return (<div className='ml-6 border-l border-dashed border-gray-500'>

				<div className='ml-6'>
					<NodeList fields={subFields ?? []} name={`${name}.fields`}  />
				</div>
			</div>)
		}
	}, [type, subFields, name,])



	return (
		<div className=''>
			<div className='flex '>

				<div className=''>
					<div className='ml-6  border-l border-b border-dashed border-gray-500 w-5 h-11'></div>
					<div className='ml-6  border-l  border-dashed border-gray-500 w-5 h-4'></div>
				</div>

				{/* <Field field={field} name={name} /> */}
				<Field  name={name} />


			</div>
			{subNode}


		</div>
	)
}
