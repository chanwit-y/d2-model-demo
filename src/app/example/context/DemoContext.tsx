"use client";

import React, { Fragment, use } from 'react'
import { ctx, ctx2, Prv, Prv2 } from './config';

export default function DemoContext() {
	return (
		<Prv>
			<Fragment>
				<h1>Demo</h1>
				<Prv2>
					<A />
				</Prv2>
			</Fragment>
		</Prv>
	)
}

const A = () => {
	const { val, sum, data } = use(ctx);
	const { data:a } = use(ctx2);

	return (
		<div>
			<p>Value: {val}</p>
			<button onClick={() => sum(1, 2)}>Sum</button>
		</div>
	)
}

