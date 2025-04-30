'use client'

import React, { useCallback } from 'react'
import { create } from 'zustand'

type TLoader = {
	loading: boolean
	open: () => void
	close: () => void
}

export const useLoader = create<TLoader>((set) => ({
	loading: false,
	open: () => set({ loading: true }),
	close: () => set({ loading: false }),
}))

type LoaderFn =  () => Promise<void> | void  

export const useAwaitLoader = () => {
	const { open, close } = useLoader();

	const awaitLoader = useCallback(async (fns: LoaderFn[]) => {
		console.log("Hi")
		open();
		try {
			for (const fn of fns) {
				await fn()
			}
			// await Promise.all(fns.map(f => f()))
		} catch (e) {
			console.error(e)
		} finally {
			close()
		}
	}, [])

	return { awaitLoader }
}

export const Loader = () => {
	const { loading } = useLoader()

	if (!loading) return null

	return (
		<div className='modal modal-open  '>
			<span className="  loading loading-bars loading-xl text-info "></span>
		</div>
	)
}
