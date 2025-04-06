
import { SVGProps } from "react";

export function Moveable(props: SVGProps<SVGSVGElement>) {
	return (
		// <svg {...props} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"><path fill="currentColor" d="M12 11V5h-1v6H8.5l3 3l3-3zM5 4v3H2V4zm1-1H1v5h5zm-5 7h1.5v1H1zm2 0h1.5v1H3zm2 0h1v1.5H5zm-4 3.5h1V15H1zm1.5.5H4v1H2.5zm2 0H6v1H4.5zM1 11.5h1V13H1zm4 .5h1v1.5H5z" /></svg>
		<svg {...props} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"><path fill="currentColor" d="M16 0H9.5L12 2.5l-3 3L10.5 7l3-3L16 6.5zm0 16V9.5L13.5 12l-3-3L9 10.5l3 3L9.5 16zM0 16h6.5L4 13.5l3-3L5.5 9l-3 3L0 9.5zM0 0v6.5L2.5 4l3 3L7 5.5l-3-3L6.5 0z"/></svg>
	)
}