import { SVGProps } from "react";

export function Dragable(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"><path fill="currentColor" d="M12 11V5h-1v6H8.5l3 3l3-3zM5 4v3H2V4zm1-1H1v5h5zm-5 7h1.5v1H1zm2 0h1.5v1H3zm2 0h1v1.5H5zm-4 3.5h1V15H1zm1.5.5H4v1H2.5zm2 0H6v1H4.5zM1 11.5h1V13H1zm4 .5h1v1.5H5z" /></svg>
	)
}