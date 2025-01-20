"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Pokemon } from './pokemon'
import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const Query = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	return (
		<QueryClientProvider client={queryClient}>

			<Pokemon />

			<ReactQueryDevtools initialIsOpen={false} />
			<button
				onClick={() => setIsOpen(!isOpen)}
			>{`${isOpen ? 'Close' : 'Open'} the devtools panel`}</button>
			{isOpen && <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />}
		</QueryClientProvider>
	)
}
