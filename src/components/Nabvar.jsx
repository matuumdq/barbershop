import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	return (
		<div className=" absolute w-full md:h-[11vh] mx-auto flex justify-between items-center p-4 z-20">
			<div className="hidden md:flex items-center cursor-pointer font-medium gap-10 p-1">
				<Link
					to="/about"
					className="border-y-2 py-1 border-transparent text-congo-brown-600 lg:text-congo-brown-100 hover:text-congo-brown-50 hover:border-congo-brown-50 ease-in duration-300"
				>
					Conoceme
				</Link>
				<Link
					to="/works"
					className="border-y-2 py-1 border-transparent text-congo-brown-600 lg:text-congo-brown-100 hover:text-congo-brown-50 hover:border-congo-brown-50 ease-in duration-300"
				>
					Mis Trabajos
				</Link>
				<Link
					to="/contact"
					className="border-y-2 py-1 border-transparent text-congo-brown-600 lg:text-congo-brown-100 hover:text-congo-brown-50 hover:border-congo-brown-50 ease-in duration-300"
				>
					Contactame
				</Link>
			</div>
			<div
				className="cursor-pointer md:hidden"
				onClick={() => setNav(!nav)}
			>
				<AiOutlineMenu
					size={30}
					className="hover:scale-110 ease-in duration-300 text-congo-brown-500"
				/>
			</div>
			{/* Left */}
			<Link to="/" className="flex items-center gap-6">
				<img
					src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685482994/logo_vdwsk5.png"
					alt="logo"
					className="h-20 w-auto"
				/>
			</Link>
			{/* Mobile Menu */}
			{/* Overlay */}
			{nav ? (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}

			{/* Side menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-full sm:w-[300px] h-screen bg-congo-brown-900 z-20 duration-300"
						: "fixed top-0 left-[-120%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<AiOutlineClose
					size={30}
					className="absolute right-4 top-4 cursor-pointer hover:scale-110 ease-in duration-300"
					onClick={() => setNav(!nav)}
				/>
				<Link to="/" onClick={() => setNav(false)}>
					<img
						src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685482994/logo_vdwsk5.png"
						alt="logo"
						className="h-32 w-auto mx-auto mt-4"
					/>
				</Link>
				<nav>
					<ul className="my-32 flex flex-col px-4 py-8 gap-10 justify-center items-center text-xl text-black">
						<Link
							to="/about"
							onClick={() => setNav(false)}
							className="text-congo-brown-100 hover:text-congo-brown-300 hover:scale-105 ease-in duration-200 flex"
						>
							Conoceme
						</Link>
						<Link
							to="/works"
							onClick={() => setNav(false)}
							className="text-congo-brown-100 hover:text-congo-brown-300 hover:scale-105 ease-in duration-200 flex"
						>
							Mis Trabajos
						</Link>
						<Link
							to="/contact"
							onClick={() => setNav(false)}
							className="text-congo-brown-100 hover:text-congo-brown-300 hover:scale-105 ease-in duration-200 flex"
						>
							<GrMail size={25} className="mr-4" />
							Contactame
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
