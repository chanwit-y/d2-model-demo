import React, { useState, useRef, useEffect } from 'react';
import {
	closestCenter,
	DndContext,
	DragOverlay,
	PointerSensor,
	useSensor,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	rectSwappingStrategy,
} from '@dnd-kit/sortable';
import { GridItem, SortableGridItem } from './GridItem';
// import {GridItem, SortableGridItem} from './GridItem';

function Grid({ className, gridItems }: any) {
	const sensors = [useSensor(PointerSensor)];
	const [items, setItems] = useState(gridItems ?? []);
	const [activeIndex, setActiveIndex] = useState(null);
	const containerRef = useRef(null);

	useEffect(() => {
		console.log(gridItems)
	}, [gridItems])

	const handleDragEnd = ({ ...props }) => {
		const { active, over } = props;
		if (active.id !== over.id) {
			setItems((itms: any) => {
				const oldIndex = itms.findIndex((item: any) => item.id === active.id);
				const newIndex = itms.findIndex((item: any) => item.id === over.id);

				return arrayMove(itms, oldIndex, newIndex);
			});
		}
		setActiveIndex(null);
	};

	const handleDragStart = ({ ...props }) => {
		const { active } = props;
		const index = items.findIndex((item: any) => item.id === active.id);
		setActiveIndex(index);
	};

	return (
		<div className={className} ref={containerRef}>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
			>
				<SortableContext
					items={items.map((item: any) => item.id)}
					strategy={rectSwappingStrategy}
				>
					{items.map((item: any, itemIndex: number) => (
						<SortableGridItem
							key={item.id}
							item={item}
							styles={activeIndex === itemIndex ? { opacity: 0 } : {}}
						/>
					))}
				</SortableContext>

				<DragOverlay>
					{activeIndex != null ? <GridItem item={items[activeIndex]} /> : null}
				</DragOverlay>
			</DndContext>
		</div>
	);
}

const StyledGrid = ({ className, children, gridItems }: any) => {
	return (
		<Grid className={`${className} grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4`}
			gridItems={gridItems}>
			{children}
		</Grid>
	);
};


// const StyledGrid = ({children}: any) => {
// 	return <div className=' grid '>{children}</div>
// }

export default StyledGrid;
