"use client"

import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

export const FormMain = () => {
	const { register, formState: { errors } } = useFormContext()

	const err = useMemo(() => errors["exampleRequired"], [errors])
	return (
		<>

			<input {...register("example")} className='input' />

			<div className='flex flex-col items-end gap-2'>
				<input {...register("exampleRequired")} className='input w-full' />
				<p className=' text-red-400'>
					{err?.message && String(err?.message)}
				</p>
			</div>
		</>
	)
}
