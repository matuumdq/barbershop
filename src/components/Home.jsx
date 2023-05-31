const Home = () => {
	return (
		<div className="">
			<div className="absolute bottom-32 px-10 md:px-24 max-w-xs md:max-w-lg flex flex-col gap-6 bg-congo-brown-900 py-10 z-10">
				<h1 className="text-4xl text-congo-brown-100 font-bold">
					Cascoxic BarberShop
				</h1>
				<p className="text-sm text-congo-brown-300">
					No esperes más y reserva tu cita en Cascoxic BarberShop hoy
					mismo. ¡Te garantizamos una experiencia de barbería
					excepcional que te hará volver una y otra vez!
				</p>
				<a
					href="https://api.whatsapp.com/send?phone=+5492236681270&text=Hola,%20quiero%20un%20turno%20para%20el%20dia%20:"
					target="_blank"
					rel="noreferrer"
					className="bg-congo-brown-600 text-congo-brown-100 px-4 py-2 w-1/2 mx-auto text-center rounded-md uppercase font-semibold hover:scale-105 hover:bg-congo-brown-700 ease-in duration-300"
				>
					Pedi tu turno
				</a>
			</div>
			<img
				className="h-screen max-w-screen-xl md:object-cover right-0 absolute"
				src="https://res.cloudinary.com/dnqmez68n/image/upload/v1685484906/hero_ocqjyx.png"
				alt=""
			/>
		</div>
	);
};

export default Home;
