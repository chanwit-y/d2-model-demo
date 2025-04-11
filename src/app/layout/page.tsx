'use client'

import { useRef, useState } from "react";
import { GridItem, Layout } from "../components/Layout";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const layout: GridItem[] = [{
	id: 1,
	type: "report",
	title: "Report 1",
	reportName: "report 1",
	col: 6,
	height: 600
},
{
	id: 2,
	type: "grid",
	title: "",
	reportName: "",
	col: 6,
	height: 600,
	grid: [
		{
			id: 1,
			type: "table",
			title: "Key Highlights",
			reportName: "test",
			col: 6,
			height: 600
		},
		{
			id: 2,
			type: "table",
			title: "Improvement",
			reportName: "",
			col: 6,
			height: 600,
			grid: []
		}
	]
}]

export default function Model() {
	const [items, setItems] = useState(layout)
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const containerRef = useRef(null);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const handleDragEnd = ({...props}) => {
		const {active, over} = props;
		if (active.id !== over.id) {
		  setItems((itms) => {
		    const oldIndex = itms.findIndex((item) => item.id === active.id);
		    const newIndex = itms.findIndex((item) => item.id === over.id);
	    
		    return arrayMove(itms, oldIndex, newIndex);
		  });
		}
		setActiveIndex(null);
	      };
	    
	      const handleDragStart = ({...props}) => {
		const {active} = props;
		const index = items.findIndex((item) => item.id === active.id);
		setActiveIndex(index);
	      };

	return (

		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
		>
			<Layout l={items} />
		</DndContext>
	)
}