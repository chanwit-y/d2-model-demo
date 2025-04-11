'use client'

import { rectSwappingStrategy, SortableContext } from "@dnd-kit/sortable";
import Item from "./Item";


export type GridItem = {
	id: number;
	type: "table" | "grid" | "report";
	title: string;
	reportName: string;
	col: number;
	height: number;
	grid?: GridItem[];
};

type Props = {
	l: GridItem[]
	isGridChild?: boolean
	maxCol?: number
}

export function Layout({ l, isGridChild = false, maxCol = 12 }: Props) {
	return (<div className={`grid grid-cols-${maxCol} ${isGridChild ? "grid-child" : "grid-parent"} gap-4 p-4 `}>

		<SortableContext
			items={l.map(item => item.id)}
			strategy={rectSwappingStrategy}
		>
			{
				l.map((item, index) => {
					return (<Item key={item.id} id={item.id} item={item} />)
				})
			}
			{/* <div className={`col-span-6  bg-white rounded-md shadow-md `}>Hi</div>
		<div className={`col-span-4  bg-white rounded-md shadow-md `}>Hi</div> */}

		</SortableContext>
	</div>)
}