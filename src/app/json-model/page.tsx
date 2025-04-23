import { Toolbar } from '../components/json/Toolbar';
import JsonModel from '../components/json/model';
import { ProviderJSONModal } from '../lib/config/modal';


export default function App() {
	return (
		<ProviderJSONModal>
			<>
				<Toolbar />
				<JsonModel />
			</>
		</ProviderJSONModal>

	)
}