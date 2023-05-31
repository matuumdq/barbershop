import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Turns from "./components/Turns";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/works" element={<Works />} />
					<Route path="/contact" element={<Turns />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
