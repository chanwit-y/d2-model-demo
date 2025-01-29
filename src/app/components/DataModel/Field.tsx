import React, { ChangeEvent, useCallback, useEffect } from 'react'
import { IField } from './@types'
import { useModel } from './Context'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { Popover } from 'radix-ui'

type Props = {
	// field: IField
	name: string
}

export const Field = ({ name }: Props) => {

	const { register, getValues, control, setValue, watch } = useFormContext();
	const { append } = useFieldArray({
		control: control, // control props comes from useForm (optional: if you are using FormProvider)
		name: `${name}.fields`, // unique name for your Field Array
	});

	const selectDataTypeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target
		if (value === 'map') {
			append({ id: '2', name: 'newField', type: 'string', fields: [] })
		}
		setValue(`${name}.type`, value)
	}, [])

	return (
		<div className='flex items-center gap-2 '>
			<label className="form-control max-w-56">
				<div className="label p-1">
					<span className="label-text text-xs">Field</span>
				</div>
				<input {...register(`${name}.name`)} className='input input-bordered input-sm' type="text" />
			</label>


			<label className="form-control max-w-96">
				<div className="label p-1">
					<span className="label-text text-xs">Type</span>
				</div>
				{/* <div className='flex gap-2 items-center'> */}
				<select {...register(`${name}.type`)}
					className="select select-bordered select-sm max-w-xs"
					onChange={selectDataTypeHandler}>
					<option disabled >What is data type?</option>
					<option selected>string</option>
					<option>map</option>
				</select>
				{/* {
						getValues(`${name}.type`) === 'array' && (
							<select className="select select-bordered select-sm max-w-xs"
							>
								<option disabled >What is data type?</option>
								<option selected>string</option>
								<option>map</option>
								<option>array</option>
							</select>
						)
					} */}
				{/* </div> */}
			</label>


			<label className="form-control max-w-96">
				<div className="label p-1">
					<span className="label-text text-xs">is Array</span>
				</div>
				<input type="checkbox" className="checkbox checkbox-accent" />
			</label>

			<Popover.Root>
				<Popover.Trigger asChild>
					<button className='mt-6 btn btn-xs btn-square btn-outline btn-info'>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="m234.67 85.33l-.004 213.338h-21.333v42.666h21.333l.005 85.33h42.666l-.004-85.33h21.333v-42.666h-21.333l.004-213.338zm-128.006 0v85.355H85.331v42.645h21.333v213.333h42.667V213.33h21.333v-42.645h-21.333V85.33zm255.981.004v128h-21.333l.013 42.663h21.333v170.666h42.688V255.997h21.333l-.013-42.663h-21.333l.013-128.004z" /></svg>
					</button>
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content side='right' align='center' sideOffset={3} className="rounded-md p-4 w-40 bg-white">
						Some content
						<Popover.Arrow className="fill-white" />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>


			{/* <button className='mb-1 btn btn-sm btn-square btn-outline btn-info'>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM6.2 7.7h5v1.5h-5zm6.8 8.1h5v1.5h-5zm0-2.6h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.1-7.1l1.4-1.4l1.4 1.4l1.1-1l-1.4-1.4L18 7.1L16.9 6l-1.4 1.4L14.1 6L13 7.1l1.4 1.4L13 9.9z" /></svg>
			</button> */}

			<button className='mt-6  btn btn-xs btn-square btn-outline btn-error'>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13H5v-2h14z" /></svg>
			</button>
			{/* <p>{field.id}</p> */}
		</div >
	)
}
