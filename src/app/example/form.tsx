"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useMemo } from 'react'
import { FormProvider, useFieldArray, useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod';
import { FormArr } from './form_arr';
import { FormMain } from './form_main';


const Schema = z.object({
	example: z.string(),
	exampleRequired: z.string().nonempty("This field is required"),
	exArr: z.array(z.object({
		name: z.string().nonempty("This field is required"),
		age: z.string()
	})).min(1, "At least one item is required"),
});

export const FormEx = () => {

	const form = useForm({
		resolver: zodResolver(Schema),
		mode: 'all'
	});

	useEffect(() => {
		console.log(form.formState.errors)
	}, [form.formState.errors])



	return (
		<FormProvider {...form} >
			<div className='flex flex-col gap-2 max-w-sm'>
				<FormMain />
				<FormArr />
				<button className='btn btn-primary'
					onClick={form.handleSubmit((data) => {
						console.log(data)
					})}
				>Submit</button>
			</div>
		</FormProvider>
	)
}
