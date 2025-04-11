import { useSortable } from "@dnd-kit/sortable";

import { CSS } from '@dnd-kit/utilities';
import { GridItem, Layout } from ".";


type Props = {
	id: number;
	item: GridItem;
}

export default function Item({ id, item }: Props) {

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id });

	const style = {
		// transition,
		// transform: CSS.Transform.toString(transform),
	      };

	// return <div ref={setNodeRef} key={id} style={style} className={`col-span-${item.col}  bg-white rounded-md shadow-md `} {...attributes} {...listeners} >
	return <div  className={`col-span-${item.col}  bg-white rounded-md shadow-md `}  >
		<div className="flex justify-between items-center bg-blue-200 p-4">
			<h2 className="text-lg font-bold">{item.title}</h2>
		</div>
		<div className="p-4">

			{item.type === "grid" ?
				<Layout l={item.grid || []} maxCol={item.col} isGridChild />
				: <p className="text-gray-500 text-center">{item.reportName}</p>
			}
		</div>
	</div>
}