'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { ModelList } from './ModelList'

export const ModelGroup = () => {
	const [isActive, setIsActive] = useState(1)

	const handleActive = (index: number) => {
		setIsActive(index)
	} 

	return (
		<div className='max-w-xs'>
			<div className="collapse collapse-arrow bg-base-200 mb-2" onClick={() => handleActive(1)}>
				<input type="radio" name="my-accordion-2" checked={isActive === 1} />
				<div className="collapse-title text-md font-semibold">Common</div>
				<div className="collapse-content">
					<ModelList />
				</div>
			</div>
			<div className="collapse collapse-arrow bg-base-200 mb-2" onClick={() => handleActive(2)}>
				<input type="radio" name="my-accordion-2" checked={isActive === 2} />
				<div className="collapse-title text-md font-semibold">System 1</div>
				<div className="collapse-content">
					<ModelList />
				</div>
			</div>
			<div className="collapse collapse-arrow bg-base-200 mb-2" onClick={() => handleActive(3)}>
				<input type="radio" name="my-accordion-2" checked={isActive === 3} />
				<div className="collapse-title text-md font-semibold">System 2</div>
				<div className="collapse-content">
					<ModelList />
				</div>
			</div>
		</div>
	)
}
