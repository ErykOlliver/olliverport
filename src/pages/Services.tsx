export default function Services() {
    return (
        <section className="Home bg-air_cold/95 pt-28 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/public/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="no-scroll w-[90%] pb-10 flex flex-col gap-2.5 overflow-y-auto text-pure_graphite font-poppins justify-start items-center h-full">
                <header className="flex flex-col w-full mb-2.5">
                    <div className="flex flex-col w-166 gap-3.5">
                        <h1 className="text-5xl font-semibold">O que posso fazer por você</h1>
                        <p className="text-pure_graphite/60 italic text-xl ">Transformo ideias em experiências digitais — conheça as soluções que posso desenvolver para o seu projeto.</p>
                    </div>
                </header>
                <div className="w-full flex flex-col gap-1.5 justify-center items-center">

                </div>
            </div>
        </section>
    )
}
