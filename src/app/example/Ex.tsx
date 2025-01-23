"use client";

import React, { useEffect, useState } from 'react'

export const Ex = () => {

	const [state, setState] = useState(0)

	const handleAction = () => {

		//1
		// let x = state
		// x = x + 1
		// x = x + 1
		// x = x + 1

		// setState(x)

//2
		// setState(state + 1)
		// setState(state + 1)
		// setState(state + 1)

//3
		// setState((prevState) => prevState + 1)
		// setState((prevState) => prevState + 1)
		// setState((prevState) => {
		// 	prevState += 2
		// 	return prevState 
		// })


		// setTimeout(() => {
		// 	alert(state)
		// }, 2000)
	}

	// useEffect(() => {
	// 	alert(state)
	// }, [state])

	return (
		<div>
			<p>{state}</p>

			<button onClick={handleAction}>Click</button>
		</div>
	)
}

// setate = 0

// setState(0 + 1)
// setState(0 + 1)
// setState(0 + 1)