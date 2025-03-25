import { SVGProps } from "react";

export function DragIndicator(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path fill="currentColor" d="M9 19.23q-.508 0-.87-.36T7.77 18t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36t-.36-.87t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m-6-6q-.508 0-.87-.36T7.77 12t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36t-.36-.87t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m-6-6q-.508 0-.87-.36T7.77 6t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36T13.77 6t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36" /></svg>
	)
}