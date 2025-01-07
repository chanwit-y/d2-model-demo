import { ModelDetail } from "../components/ModelDetail";
import { ModelGroup } from "../components/ModelGroup";

export default function Model() {
	return (<div className="grid grid-flow-col grid-cols-4 h-svh">
		<div className="col-span-1 p-4">
			<ModelGroup />
		</div>
		<div className=" col-span-3">
			<ModelDetail />
		</div>
	</div>)
}