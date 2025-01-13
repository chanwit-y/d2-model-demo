"use client";

import { useOptimistic, useState, useRef, Fragment } from "react";


type A = { text: string, sending: boolean }

async function deliverMessage(message: string) {
	await new Promise((res) => setTimeout(res, 1000));
	return message;
}

function Thread({ messages, sendMessage }: { messages: A[], sendMessage: (formData: FormData) => Promise<void> }) {
	const formRef = useRef<HTMLFormElement | null>(null);

	async function formAction(formData: FormData) {
		const message = formData.get("message")?.toString();
		if (!message) return
		addOptimisticMessage({ text: message, sending: false });
		formRef.current?.reset();
		//จุดร่วม
		await sendMessage(formData);
	}

	const [optimisticMessages, addOptimisticMessage] = useOptimistic(
		messages,
		(state, newMessage: A) => [
			...state,
			{
				text: newMessage.text + " (Optimistic)",
				sending: true
			}
		]
	);

	return (
		<>
			{optimisticMessages.map((message, index) => (
				<div key={index}>
					{message.text}
					{!!message.sending && <small> (Sending...)</small>}
				</div>
			))}
			<form action={formAction} ref={formRef}>
				<input type="text" name="message" placeholder="Hello!" />
				<button type="submit">Send</button>
			</form>
		</>
	);
}

export default function Optimistic() {
	const [messages, setMessages] = useState([
		{ text: "Hello there!", sending: false, key: 1 }
	]);
	async function sendMessage(formData: FormData) {
		const message = formData.get("message")?.toString()
		if (!message) return
		const sentMessage = await deliverMessage(message);
		// setMessages((messages) => [...messages, { text: sentMessage, sending: false, key: messages.length + 1 }]);
	}
	return <Fragment>
		<pre>
		{JSON.stringify(messages, undefined, 2)}
		</pre>
		<Thread messages={messages} sendMessage={sendMessage} />
	</Fragment>;
}