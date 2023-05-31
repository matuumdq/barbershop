import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Nabvar";
import Footer from "./Footer";

const MainLayout = () => {
	const location = useLocation();

	return (
		<div className="bg-congo-brown-900">
			<Navbar />
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={300}
					classNames="page"
				>
					<main className="w-full min-h-[90vh] h-auto">
						<Outlet />
					</main>
				</CSSTransition>
			</TransitionGroup>
			<Footer />
		</div>
	);
};

export default MainLayout;
