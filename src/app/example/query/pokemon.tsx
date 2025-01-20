import { useQuery } from '@tanstack/react-query'
import React from 'react'

//https://pokeapi.co/api/v2/pokemon

export const Pokemon = () => {

	const { data, refetch, isPending, isLoading, error, isFetching } = useQuery({
		queryKey: ['pokemon', 'hi' , 'xxx'],
		queryFn: async () => {
			try{
			const response = await fetch('https://pokeapi.co/api/v2/pokemon')
			const data = await response.json()
			return data
			} catch (error) {
				throw new Error('Failed to fetch pokemon')
			}
		},
		refetchOnWindowFocus: true,
	})
	const x = useQuery({
		queryKey: ['pokemon'],
		queryFn: async () => {
			try{
			const response = await fetch('https://pokeapi.co/api/v2/pokemon')
			const data = await response.json()
			return data
			} catch (error) {
				throw new Error('Failed to fetch pokemon')
			}
		},
		refetchOnWindowFocus: true,
	})


	return (
		<div>
			<h1>Pokemon</h1>

			<p>isLoading:{String(isLoading)}</p>
			<p>isPending:{String(isPending)}</p>
			<p>isFetching:{String(isFetching)}</p>

			<h3>Error</h3>
			<pre>{JSON.stringify(error, null, 2)}</pre>

			<h3>Data</h3>
			<pre>{JSON.stringify(data)}</pre>

			<button onClick={() => refetch()}>Refetch</button>
		</div>
	)
}
