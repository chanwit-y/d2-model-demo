"use client"

import React, { useMemo } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

export const FormArr = () => {
	const { control, register, setValue, getValues, watch } = useFormContext()
	const { fields, append, remove } = useFieldArray({
		control: control,
		name: 'exArr'
	})

	const ex = useMemo(() => getValues("example"), [getValues("example")])

	return (
		<div className='flex flex-col items-end gap-2'>

			<div className='flex items-center gap-2'>
				<p>{watch('example')}</p>
				<button className='btn' onClick={() => {
					console.log(getValues("example"))
				}}>Log Get Val</button>
				<button className='btn' onClick={() => {
					setValue("example", "Set Val")
				}}>Set Val</button>
			</div>

			<button className='btn btn-square' onClick={() => {
				append({ name: '', age: 0 })
			}}>+</button>

			{fields.map((field, index) => {
				return (
					<div key={index} className=' grid grid-cols-5 gap-2'>
						<input className=' input col-span-2'  {...register(`exArr.${index}.name`)} />
						<input className='input col-span-2'  {...register(`exArr.${index}.age`)} />
						<button className='btn btn-square' onClick={() => {
							remove(index)
						}}>-</button>
					</div>
				)
			})}
		</div>
	)
}
