import { ModelDetail } from "../components/ModelDetail";
import { ModelGroup } from "../components/ModelGroup";
import { ModelList } from "../components/ModelList";
import { Provider } from "../lib/modal/ModalFactory";
// import Modal from "../context/ModalContext";

export default function Model() {
	return (
		<div className="grid grid-flow-col grid-cols-4 h-svh">
			<div className="col-span-1 p-4 ">
				{/* <ModelGroup /> */}
				<Provider>
					<ModelList />
				</Provider>
			</div>
			<div className=" col-span-3 py-4 pl-0 pr-4">
				<ModelDetail />
			</div>
		</div>)
}