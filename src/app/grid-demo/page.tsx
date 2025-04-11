'use client'
import { useState } from "react";
import Grid from "../components/Layout/G/Grid";

// https://codesandbox.io/p/sandbox/react-dnd-kit-swapping-order-sp27y?file=%2Fsrc%2FGrid%2FGrid.jsx%3A71%2C27-71%2C31

export default function Layout2() {
	const [items] = useState([
		{ id: "1", name: "One" },
		{ id: "2", name: "Two" },
		{ id: "3", name: "Three" },
		{ id: "4", name: "Four" },
		{ id: "5", name: "Five" },
		{ id: "6", name: "Six" },
		{ id: "7", name: "Seven" },
		{ id: "8", name: "Eight" },
		{ id: "9", name: "Nine" },
		{ id: "10", name: "Ten" }
	      ]);
	    
	      return (
		<div className="App">
		  <Grid gridItems={items} />
		</div>
	      );
}
