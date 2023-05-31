const About = () => {
	return (
		<div className="">
			<div className="absolute top-28 md:top-44 w-full left-[50%] translate-x-[-50%] mx-auto px-2 md:px-14 max-w-lg md:max-w-lg flex flex-col gap-6 bg-congo-brown-900 py-6 md:py-10 z-10">
				<h1 className="text-2xl text-center text-congo-brown-100 font-bold">
					Quien Soy?
				</h1>
				<p className="text-sm text-congo-brown-200">
					¡Hola! Soy Marcos Casco, un barbero profesional
					especializado en cortes de pelo y barba a domicilio. Con más
					de un año de experiencia, llevo mi pasión por la barbería
					directamente a tus puertas. Utilizando máquinas de última
					generación, me especializo en degradados de barba y pelo
					para brindarte un estilo impecable. Mi objetivo es ofrecerte
					comodidad, conveniencia y resultados excepcionales. Además,
					me enorgullezco de escuchar tus necesidades y preferencias
					para asegurarme de que salgas sintiéndote y luciendo
					increíble. Ponte en contacto conmigo para reservar una cita
					y disfruta de una experiencia de barbería única y
					personalizada en la comodidad de tu hogar. ¡Estoy emocionado
					de ayudarte a lucir tu mejor versión!
				</p>
			</div>
			<img
				className="h-screen w-full object-cover right-0 absolute"
				src="https://img.freepik.com/foto-gratis/peluqueria-recortadora-electrica-cortar-cabello-cliente_651396-2951.jpg?w=1380&t=st=1685485996~exp=1685486596~hmac=173a79253c8f51434d28122a6fe94419022c96c5efe38d04e6f29921ccff1fbb"
				alt=""
			/>
		</div>
	);
};

export default About;
