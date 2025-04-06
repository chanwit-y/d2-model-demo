'use client'
import { useEffect } from 'react';
import JsonModel from '../components/json/model';

import data from "../components/json/model/data/input.json"
import { R } from '../components/json/model/Stord';


export default function App() {

	useEffect(() => {
		const r: any[] = []
		R(data, r)
		console.log("r", r);
	}, [])

	return (
		<JsonModel />

	)
}