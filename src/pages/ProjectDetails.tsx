import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProjectDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;
    return (
        <section className=" bg-air_cold/90 pt-28 w-full h-full flex justify-center items-start">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/public/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="no-scroll overflow-y-auto border-2 border-white shadow-md rounded-lg animate-slide-to-left bg-gradient-to-tl from-gray-200 to-air_cold p-2.5 w-[70%]  h-[90%] flex flex-col gap-1.5 text-pure_graphite font-poppins justify-start items-center ">
                <header className=" flex flex-row w-full justify-between px-10 py-4 items-center">
                    <button onClick={() => navigate('/projects')} className="group flex hover:text-deep_sea justify-center hover:cursor-pointer items-center">
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-md">Voltar</span>
                    </button>
                    <h1 className="text-2xl font-semibold">{project.title}</h1>
                </header>
                <div className="w-7xl px-6">
                    <div className="w-full h-96">
                        <img src={project.thumb} className="w-full rounded-lg h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-3 gap-12 mb-16 w-full justify-between mt-10">
                        <div className="col-span-2">
                            <section className="w-full">
                                <div className="flex flex-col gap-1.5">
                                    <h2 className="text-2xl font-semibold">Sobre o Projeto</h2>
                                    <p className="text-base">{project.description}</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <h2 className="text-2xl font-semibold">Detalhes</h2>
                                    <div className="w-full grid grid-cols-2">
                                        <div className="border p-4 border-white shadow-md rounded-md bg-gradient-to-tl from-gray-200 to-air_cold">
                                            <span className="text-pure_graphite/60">Função</span>
                                            <h3 className="text-xl font-medium ">{project.function}</h3>
                                        </div>
                                        <div className="border p-4 border-white shadow-md rounded-md bg-gradient-to-tl from-gray-200 to-air_cold">
                                            <span className="text-pure_graphite/60">Designer</span>
                                            <h3 onClick={() => window.open(project.designer_page)} className="text-xl hover:cursor-pointer hover:underline font-medium ">{project.designer}</h3>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-span-1 mr-5">
                            <section className="w-full flex flex-col gap-2.5">
                                <div className="flex flex-col gap-1.5">
                                    <h2 className="text-2xl font-semibold">Tecnologias</h2>
                                    <div className="grid grid-cols-4 gap-1">
                                        {project.stack.map((stack: string) => (
                                            <p className="text-sm rounded-md p-2 animate-slide-to-left  flex border border-gray-600/50 hover:border-gray-500 transition-colors text-pure_graphite/70  justify-center items-center bg-gradient-to-tl from-gray-200 to-air_cold">
                                                {stack}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <button className="bg-blue_breeze p-2.5 flex gap-1.5 items-center justify-center hover:cursor-pointer text-xl rounded-md border-2 border-white text-air_cold" onClick={() => window.open(project.page)}> Visualizar Página <ExternalLink /></button>
                                    <button className="bg-pure_graphite p-2.5 flex gap-1.5 items-center justify-center hover:cursor-pointer text-xl rounded-md border-2 border-white text-air_cold" onClick={() => window.open(project.github)}>GitHub <SiGithub /></button>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-semibold">Plataforma</h2>
                                    <p>{project.plataform}</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
