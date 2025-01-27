"use client";

import React from 'react'
import { Provider } from './Context'
import data from './data.json'
import { NodeList } from './NodeList'
import { IField } from './@types';
import { TField } from './schema';

export const DataModel = () => {
	return (
		<Provider init={data.model.fields as IField[]} data={data}>
			{(root, name) => (
				<div className='flex flex-col p-6'>

					<input className='input input-bordered input-sm' type="text" />


					<NodeList fields={root ?? []} name={name}  />

				</div>
			)}
		</Provider>
	)
}
