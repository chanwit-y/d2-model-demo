import { use } from "react"
import { params } from "./ModalFactory"
// import { Ctx } from "./ModalFactory"


export const Modal1 = () => {
	// const { m, param} = use(Ctx)

	const p = params()?.modal1

	return <div>
		<h1>{JSON.stringify(p, null, 2)}</h1>
		<p>{p?.name}</p>
		<p>{p?.age}</p>
	</div>
}


export const Modal2 = ({ age, text }: { age: number, text: string }) => {
	// const { m, param} = use(Ctx)


	return <div>
		<h1>Modal 2</h1>
		<h3>{text}</h3>
		<p>{String(age)}</p>
	</div>
}