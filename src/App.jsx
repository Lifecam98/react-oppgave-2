import "./App.css";
import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";
import Divider from "./components/Divider";

function App() {
	return (
		<>
			<Divider />
			<CookieClicker />
			<Divider />
			<CatFacts />
			<Divider />
			<Users />
			<Divider />
		</>
	);
}

export default App;
