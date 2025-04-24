import { SVGProps } from "react";

export function LineMdClose(props: SVGProps<SVGSVGElement>) {
	return (
		// <svg {...props} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"><path fill="currentColor" d="M12 11V5h-1v6H8.5l3 3l3-3zM5 4v3H2V4zm1-1H1v5h5zm-5 7h1.5v1H1zm2 0h1.5v1H3zm2 0h1v1.5H5zm-4 3.5h1V15H1zm1.5.5H4v1H2.5zm2 0H6v1H4.5zM1 11.5h1V13H1zm4 .5h1v1.5H5z" /></svg>
		<svg  {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="12" strokeDashoffset="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0" /></path></svg>
		// <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
	)
}