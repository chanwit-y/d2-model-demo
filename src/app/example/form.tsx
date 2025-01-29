"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod';


const Schema = z.object({
	example: z.string(),
	exampleRequired: z.string().nonempty("This field is required"),
});

export const FormEx = () => {

	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		resolver: zodResolver(Schema),
		mode: 'all'
	});
	// const onSubmit = (data: any) => console.log(data);

	// console.log(watch("example")); // watch input value by passing the name of it
	useEffect(() => {
		console.log(errors)
	}, [errors])

	const err = useMemo(() => errors["exampleRequired"], [errors])


	return (
		<form >
			<input {...register("example")} />

			<input {...register("exampleRequired")} />
			{String(err?.message)}
			<br />
			<button
				onClick={handleSubmit((data) => {
					console.log('Hi')
					console.log(data)
				})}
			>Test</button>
		</form>
	)
}
