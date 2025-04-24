'use client';
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { vim } from "@replit/codemirror-vim"
import { oneDark } from '@codemirror/theme-one-dark';
import { linter, Diagnostic } from '@codemirror/lint';

type Props = {
	height?: number
	readonly?: boolean
	useVim?: boolean
	width?: number
}

const jsonLinter = () => {
	return linter((view) => {
		const diagnostics: Diagnostic[] = [];
		const text = view.state.doc.toString();

		try {
			JSON.parse(text);
		} catch (err: any) {
			const message = err.message;
			// Try to find line/col from the error message (basic fallback)
			const match = message.match(/at position (\d+)/);
			const pos = match ? Number(match[1]) : 0;

			diagnostics.push({
				from: pos,
				to: pos + 1,
				severity: 'error',
				message: err.message,
			});
		}

		return diagnostics;
	});
};


function Editor({ height, width, readonly = false, useVim = false }: Props) {
	const [value, setValue] = useState();
	const [error, setError] = useState<string | null>(null);

	const onChange = React.useCallback((val: any, viewUpdate: any) => {
		setValue(val);
		try {
			JSON.parse(val);
			setError(null); // valid JSON
		} catch (e: any) {
			setError(e.message); // invalid JSON
		}
	}, []);
	return <div className='flex flex-col gap-2'>
		<CodeMirror
			className=' cursor-pointer  border border-blue-400 rounded-md overflow-hidden'
			value={value}
			// width={width ? `${width}rem` : "100%"}
			height={height ? `${height}px` : "100%"}
			readOnly={readonly}
			extensions={[json(), jsonLinter(), useVim ? vim() : []]}
			theme={oneDark}
			onChange={onChange} />
		{error && (
			<span className="text-red-500 text-sm ">
				❌ JSON Syntax Error: {error}
			</span>
		)}
	</div>;
}
export default Editor;