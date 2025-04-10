import { GridItem, Layout } from "../components/Layout";


const layout: GridItem[] = [{
	type: "report",
	title: "Report 1",
	reportName: "report 1",
	col: 6,
	height: 600
},
{
	type: "grid",
	title: "",
	reportName: "",
	col: 6,
	height: 600,
	grid: [
		{
			type: "table",
			title: "Key Highlights",
			reportName: "test",
			col: 6,
			height: 600
		},
		{
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
	return (
		<Layout l={layout} />
	)
}