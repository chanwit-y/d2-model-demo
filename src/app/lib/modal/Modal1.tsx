import { use } from "react"
import { Ctx } from "./ModalFactory"


export const Modal1 = () => {
	const { m, param} = use(Ctx)

	return <div>
		<h1>{JSON.stringify(param?.modal1, null, 2)}</h1>
		<p>{param?.modal1.name}</p>
		<p>{param?.modal1.age}</p>
	</div>
}