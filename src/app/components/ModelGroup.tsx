'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { ModelList } from './ModelList'
import { ModelCatagory } from './ModelCatagory'

export const ModelGroup = () => {
	const [isActive, setIsActive] = useState(1)


	return (
		<div className='max-w-xs h-[calc(100vh-6rem)] p-2 rounded-md overflow-scroll dark:bg-slate-800'>
			<ModelCatagory title='Common' index={1} indexActive={isActive} onActive={setIsActive}>
				<ModelList />
			</ModelCatagory>
			<ModelCatagory title='System 1' index={2} indexActive={isActive} onActive={setIsActive}>
				<ModelList />
			</ModelCatagory>
			<ModelCatagory title='System 1' index={3} indexActive={isActive} onActive={setIsActive}>
				<ModelList />
			</ModelCatagory>
		</div>
	)
}
