'use client'


export type GridItem = {
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
		{
			l.map((item, index) => {
				return (
					<div key={index} className={`col-span-${item.col}  bg-white rounded-md shadow-md `}>
						<div className="flex justify-between items-center bg-blue-200 p-4">
							<h2 className="text-lg font-bold">{item.title}</h2>
						</div>
						<div className="p-4">

							{item.type === "grid" ?
								<Layout l={item.grid || []} maxCol={item.col}  isGridChild/>
								: <p className="text-gray-500 text-center">{item.reportName}</p>
							}
						</div>
					</div>
				)
			})
		}
		{/* <div className={`col-span-6  bg-white rounded-md shadow-md `}>Hi</div>
		<div className={`col-span-4  bg-white rounded-md shadow-md `}>Hi</div> */}
	</div>)
}