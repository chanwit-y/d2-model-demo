'use client'

import { useActionState, useEffect } from 'react'
import { createUser } from './action'


export function Test() {
	//   const [state, formAction, pending] = useActionState(createUser, [])

	useEffect(() => {
		console.log('useEffect')
		createUser()
	}, [])

	return (
		//     <form action={formAction}>
		//       <label htmlFor="email">Email</label>
		//       <input type="text" id="email" name="email" required />
		//       {/* ... */}
		//       <p aria-live="polite">{JSON.stringify(state, undefined, 2)}</p>
		//       <button disabled={pending}>Sign up</button>
		//     </form>
		<div>Hi</div>
	)
}