import { BsWhatsapp } from "react-icons/bs";
const Turns = () => {
	return (
		<div className="h-auto min-h-screen">
			<div className="absolute flex flex-col gap-6 text-center top-64 w-full left-[50%] translate-x-[-50%] mx-auto px-2 md:px-14 max-w-lg md:max-w-lg bg-congo-brown-900 rounded-md py-6 z-10">
				<p className="text-2xl text-congo-brown-50 uppercase font-bold">
					Solicita tu turno
				</p>
				<p className="text-congo-brown-100">
					Contactate para recibir toda la informacion de los proximos
					turnos disponibles
				</p>
				<a
					href="https://api.whatsapp.com/send?phone=+5492236681270&text=Hola,%20quiero%20un%20turno%20para%20el%20dia%20:"
					target="_blank"
					rel="noreferrer"
				>
					<BsWhatsapp
						size={30}
						className="text-congo-brown-200 mx-auto hover:scale-110 ease-in duration-300"
					/>
				</a>
			</div>

			<img
				className="h-screen w-full object-cover right-0 absolute"
				src="https://img.freepik.com/foto-gratis/peluqueria-recortadora-electrica-cortar-cabello-cliente_651396-2951.jpg?w=1380&t=st=1685485996~exp=1685486596~hmac=173a79253c8f51434d28122a6fe94419022c96c5efe38d04e6f29921ccff1fbb"
				alt=""
			/>
		</div>
	);
};

export default Turns;
