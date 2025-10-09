export default function Home() {
    return (
        <section className="w-full h-full flex justify-center items-center">
            <div className="w-[90%] flex justify-between items-center h-full">
                <article>
                    <div>
                        <span className="text-4xl font-light">Olá Mundo, eu sou</span>
                        <h1 className="flex flex-col font-poppins font-semibold text-8xl">Eryk Olliver</h1>
                        <h2>DESENVOLVEDOR • FULL-STACK</h2>
                    </div>
                    <p>
                        Desenvolvo aplicações modernas e eficientes, com foco em interfaces acessíveis e
                        experiências marcantes, sempre mantendo qualidade no código e usabilidade no centro.
                    </p>
                    <a href="">Contratar Serviço</a>
                    <div>
                        <h3>Minha Stack de Tecnologias</h3>

                    </div>
                </article>
                <img src="../../public/ErykOlliver.png" alt="" />
            </div>
        </section>
    )
}
