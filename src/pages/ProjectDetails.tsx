import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProjectDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;
    return (
        <section className=" lg:bg-air_cold/90 bg-air_cold/95 lg:pt-28 pt-15 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="no-scroll overflow-y-auto border-2 border-white shadow-md rounded-lg animate-slide-to-left bg-gradient-to-tl from-gray-200 to-air_cold p-2.5 w-[90%] lg:w-[70%] h-[95%] lg:h-[90%] flex flex-col gap-1.5 text-pure_graphite font-poppins justify-start items-center ">
                <header className=" flex flex-row w-full justify-between lg:px-10 py-4 items-center">
                    <button onClick={() => navigate('/projects')} className="group flex hover:text-deep_sea justify-center hover:cursor-pointer items-center">
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="lg:text-md text-sm">Voltar</span>
                    </button>
                    <h1 className="lg:text-2xl lg:text-center text-end text-xs font-semibold">{project.title}</h1>
                </header>
                <div className="w-full lg:px-6">
                    <div className="w-full lg:h-96 h-40">
                        <img src={project.thumb} className="w-full rounded-lg lg:border-2 border border-white h-full object-cover" />
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 lg:mb-16 mb-5 w-full justify-between lg:mt-10 mt-2.5">
                        <div className="col-span-2">
                            <section className="w-full">
                                <div className="flex flex-col gap-1.5">
                                    <h2 className="lg:text-2xl text-lg font-semibold">Sobre o Projeto</h2>
                                    <p className="lg:text-base text-xs text-pure_graphite/60">{project.description}</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <h2 className="lg:text-2xl text-lg font-semibold">Detalhes</h2>
                                    <div className="w-full grid gap-2 grid-cols-2">
                                        <div className="border flex flex-col p-4 border-white justify-center shadow-md rounded-md bg-gradient-to-tl from-gray-200 to-air_cold">
                                            <span className="text-pure_graphite/60 lg:text-xl text-md">Função</span>
                                            <h3 className="lg:text-xl font-medium text-sm ">{project.function}</h3>
                                        </div>
                                        <div className="border flex flex-col p-4 border-white shadow-md justify-center rounded-md bg-gradient-to-tl from-gray-200 to-air_cold">
                                            <span className="text-pure_graphite/60 lg:text-xl text-md">Designer</span>
                                            <a href={project.designer_page} target="_blank" className="lg:text-xl text-sm hover:cursor-pointer hover:underline font-medium ">{project.designer}</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="lg:col-span-1 col-span-2 w-full">
                            <section className="w-full flex flex-col gap-2.5">
                                <div className="flex flex-col gap-1.5">
                                    <h2 className="lg:text-2xl text-lg font-semibold">Tecnologias</h2>
                                    <div className="grid lg:grid-cols-4 grid-cols-3 gap-1">
                                        {project.stack.map((stack: string) => (
                                            <p className="lg:text-sm text-xs lg:rounded-md rounded lg:p-2 p-1 animate-slide-to-left  flex border border-gray-600/50 hover:border-gray-500 transition-colors text-pure_graphite/70  justify-center items-center bg-gradient-to-tl from-gray-200 to-air_cold">
                                                {stack}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <a className="bg-blue_breeze p-2.5 flex font-medium gap-1.5 items-center justify-center hover:cursor-pointer lg:text-xl text-md rounded-md lg:border-2 border border-white text-air_cold" href={project.page} target="_blank"> Visualizar Página <ExternalLink className="size-6" /></a>
                                    <a className="bg-pure_graphite p-2.5 flex gap-1.5 font-medium items-center justify-center hover:cursor-pointer lg:text-xl text-md rounded-md lg:border-2 border border-white text-air_cold" href={project.github} target="_blank">GitHub <SiGithub className="size-6" /></a>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="lg:text-2xl text-lg font-semibold">Plataforma</h2>
                                    <p className="text-pure_graphite/60 lg:text-sm text-xs">{project.plataform}</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
