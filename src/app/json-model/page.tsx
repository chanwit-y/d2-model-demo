import { Toolbar } from '../components/json/Toolbar';
import JsonModel from '../components/json/model';
import { Provider } from '../lib/modal/ModalFactory';


export default function App() {
	return (
		<Provider>
			<Toolbar />
			<JsonModel />
		</Provider>

	)
}