import { useNavigate } from "react-router-dom";
import ServiceItem from "../components/serviceItem";

export default function Services() {
    const navigate = useNavigate()
    return (
        <section className="Home bg-air_cold/95 pt-28 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/public/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="no-scroll w-[90%] pb-10 flex flex-col gap-2.5 overflow-y-auto text-pure_graphite font-poppins justify-start items-center h-full">
                <header className="flex animate-slide-to-right flex-col w-full">
                    <div className="flex flex-col w-166 gap-3.5">
                        <h1 className="text-5xl font-semibold">O que posso fazer por você</h1>
                        <p className="text-pure_graphite/60 italic text-xl ">Transformo ideias em experiências digitais — conheça as soluções que posso desenvolver para o seu projeto.</p>
                    </div>
                </header>
                <div className="w-full grid grid-cols-3 gap-2.5 justify-center items-center">
                    <ServiceItem
                        title="Landing pages modernas com design responsivo"
                        description="Landing pages com visual moderno, focadas em conversão e totalmente responsivas. Perfeitas para lançamentos, capturas de leads ou apresentar seu produto com impacto e profissionalismo."
                        thumb="../../public/services/lp.svg"
                    />
                    <ServiceItem
                        title="Sites institucionais e portfólios para marcas e profissionais"
                        description="Sites institucionais que transmitem credibilidade e reforçam a identidade da sua marca. Seja para empresas ou profissionais, entrego um visual limpo, funcional e adaptado ao seu público."
                        thumb="../../public/services/tp.svg"
                    />
                    <ServiceItem
                        title="Blogs dinâmicos com painel de controle"
                        description="Blogs rápidos, otimizados para SEO e fáceis de atualizar. Você mesmo pode gerenciar os conteúdos com um painel intuitivo, sem depender de programação ou ferramentas complicadas."
                        thumb="../../public/services/blog.svg"
                    />
                    <ServiceItem
                        title="E-commerces com carrinho, checkout e painel de produtos"
                        description="Lojas virtuais leves, seguras e eficientes para você vender seus produtos online. Incluo carrinho, checkout e um painel completo para gerenciar pedidos, preços e estoque."
                        thumb="../../public/services/ecomer.svg"
                    />
                    <ServiceItem
                        title="Painéis administrativos para gerenciar dados internos"
                        description="Dashboards personalizados que facilitam a visualização e gestão de dados do seu negócio. Tudo adaptado às suas necessidades, com gráficos, filtros e uma interface limpa."
                        thumb="../../public/services/dash.svg"
                    />
                    <ServiceItem
                        title="Aplicativos modernos para dispositivos móveis"
                        description="Aplicativos móveis para Android e iOS com uma única base de código. Ideal para MVPs, soluções internas ou projetos que precisam estar nos dois sistemas com rapidez e economia."
                        thumb="../../public/services/ad.svg"
                    />
                </div>
                <div className="w-full flex flex-col gap-2.5 mt-4 justify-center items-center">
                    <h2 className="text-3xl w-220 text-center">Não encontrou o que procura? Me chame! Podemos criar juntos uma solução sob medida para o seu projeto.</h2>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 hover:cursor-pointer transition-shadow duration-300 hover:shadow-sm shadow-blue_breeze rounded-lg text-white border-white bg-blue_breeze border-2 font-semibold text-2xl p-2.5 text-center">
                        Vamos conversar sobre seu projeto
                    </button>
                </div>
            </div>
        </section>
    )
}
