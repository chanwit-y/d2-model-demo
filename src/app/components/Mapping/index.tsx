
"use client"

import React, { useState } from 'react'

export const Mapping = () => {


	const [mX, setMx] = useState(10);
	const [mY, setMy] = useState(10);

	const [cEndX, setCEndX] = useState(240);
	const [cEndY, setCEndY] = useState(50);

	const [cX1, setCx1] = useState(240);
	const [cY1, setCy1] = useState(10);

	const [cX2, setCx2] = useState(240);
	const [cY2, setCy2] = useState(35);



	return (
		<div className=' bg-white grid grid-flow-col grid-cols-4 gap-4'>

			<div className='col-span-3'>
				<svg className='w-full h-svh bg-slate-400' xmlns="http://www.w3.org/2000/svg">

					{/* C 20 20, 40 20 */}
					<path d="M 50 50 C 100 0, 100 100, 200 50" stroke="black" fill="transparent" />
					{/* <path d={`M ${mX} ${mY} H 200  C ${cX1} ${cY1}, ${cX2} ${cY2}, ${cEndX} ${cEndY} `} stroke="black" fill="transparent" /> */}
					{/* <path d={`M ${mX} ${mY} H 200  C ${cX1} ${cY1}, ${cX2} ${cY2}, ${cEndX} ${cEndY}   `} stroke="black" fill="transparent" /> */}
					{/* <path d={`M ${mX} ${mY} H 200  C ${cX1} ${cY1}, ${cX2} ${cY2}, ${cEndX} ${cEndY} V 200 `} stroke="black" fill="transparent" /> */}



					<circle cx="50" cy="50" r="2" fill="pink" />
					<circle cx="100" cy="0" r="2" fill="pink" />
					<circle cx="100" cy="100" r="2" fill="pink" />
					<circle cx="200" cy="50" r="2" fill="pink" />

					<circle cx={mX}
						cy={mY}
						r="2"
						className='cursor-move'
						fill="red"
					/>
					<circle cx={cX1} cy={cY1} r="2" fill="blue" />
					<circle cx={cX2} cy={cY2} r="2" fill="yellow" />
					<circle cx={cEndX} cy={cEndY} r="2" fill="green" />


				</svg>
			</div>
			<div className='p-4 col-span-1'>
				<p>{`Move to X: ${mX}:`}</p>
				<input type="range" className='w-full' min="0" max="1000" value={mX} onChange={(e) => setMx(Number(e.target.value))} />

				<p>{`Move to Y: ${mY}:`}</p>
				<input type="range" className='w-full' min="0" max="1000" value={mY} onChange={(e) => setMy(Number(e.target.value))} />

				<hr className='my-4' />

				<p className=' text-green-600'>{`End to X: ${cEndX}:`}</p>
				<input type="range" className='w-full' min="0" max="1000" value={cEndX} onChange={(e) => setCEndX(Number(e.target.value))} />

				<p className=' text-green-600'>{`End to Y: ${cEndY}:`}</p>
				<input type="range" className='w-full' min="0" max="1000" value={cEndY} onChange={(e) => setCEndY(Number(e.target.value))} />

				<hr className='my-4' />

				<p className=' text-blue-500'>{`C x1: ${cX1}:`}</p>
				<input type="range" className='w-full' min="0" max="1000" value={cX1} onChange={(e) => setCx1(Number(e.target.value))} />

				<p className=' text-blue-500'>{`C y1: ${cY1}:`}</p>
				<input type="range" className='w-full' min="0" max="1000" value={cY1} onChange={(e) => setCy1(Number(e.target.value))} />

				<hr className='my-4' />
				<p className=' text-yellow-300'>{`C x2: ${cX2}:`}</p>
				<input type="range" className='w-full' min="0" max="1000" value={cX2} onChange={(e) => setCx2(Number(e.target.value))} />

				<p className=' text-yellow-300'>{`C y2: ${cY2}:`}</p>
				<input type="range" className='w-full' min="0" max="1000" value={cY2} onChange={(e) => setCy2(Number(e.target.value))} />

			</div>

		</div>
	)
}
