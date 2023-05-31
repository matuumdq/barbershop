const Works = () => {
	return (
		<div className="h-auto min-h-screen">
			<div className="absolute text-center top-28 md:top-32 w-full left-[50%] translate-x-[-50%] mx-auto px-2 md:px-14 max-w-lg md:max-w-lg bg-congo-brown-900 rounded-md py-6 z-10">
				<p className="text-2xl text-congo-brown-50 uppercase font-bold">
					Algunos de mis trabajos
				</p>
			</div>
			<div className="flex max-w-screen-xl w-full absolute z-10 gap-5 flex-wrap justify-center left-[50%] translate-x-[-50%] top-56 md:top-64">
				<img
					src="https://img.freepik.com/foto-gratis/joven-peluqueria-corte-pelo_1303-26254.jpg?w=826&t=st=1685488208~exp=1685488808~hmac=99044db30b4825ee35a9a20cc7dfaea80f57f036d5e2948313f16edfbe557d3b"
					alt=""
					className="max-h-56 rounded-lg"
				/>
				<img
					src="https://img.freepik.com/foto-gratis/joven-peluqueria-corte-pelo_1303-26254.jpg?w=826&t=st=1685488208~exp=1685488808~hmac=99044db30b4825ee35a9a20cc7dfaea80f57f036d5e2948313f16edfbe557d3b"
					alt=""
					className="max-h-56 rounded-lg"
				/>
			</div>
			<img
				className="h-screen w-full object-cover right-0 absolute"
				src="https://img.freepik.com/foto-gratis/peluqueria-recortadora-electrica-cortar-cabello-cliente_651396-2951.jpg?w=1380&t=st=1685485996~exp=1685486596~hmac=173a79253c8f51434d28122a6fe94419022c96c5efe38d04e6f29921ccff1fbb"
				alt=""
			/>
		</div>
	);
};

export default Works;
