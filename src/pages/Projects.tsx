import { Crown, Layers, Pickaxe } from "lucide-react";
import ProjectList from "../components/projectList";
import ProjectItem from "../components/projectItem";
import { SiCashapp, SiEslint, SiFirebase, SiGit, SiGithub, SiJavascript, SiReact, SiSharp, SiTailwindcss, SiTypescript, SiUnity, SiVite } from "react-icons/si";

export default function Projects() {
    return (
        <section className="Home bg-air_cold/90 pt-28 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/public/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="no-scroll w-[90%] pb-10 flex flex-col gap-2.5 overflow-y-auto text-pure_graphite font-poppins justify-start items-center h-full">
                <header className="flex flex-col w-full mb-2.5">
                    <div className="animate-slide-to-right flex flex-col w-166 gap-3.5">
                        <h1 className="text-5xl font-semibold">Biblioteca de projetos</h1>
                        <p className="text-pure_graphite/60 italic text-xl ">aqui você encontra os projetos que construí ao longo da minha jornada. Cada um carrega estudo, prática e evolução.</p>
                    </div>
                </header>
                <div className="w-full flex flex-col gap-1.5 justify-center items-center">
                    <ProjectList title="Em Destaque" icon={<Crown size={32} />}>
                        <ProjectItem
                            title="Pixel Power - Transforme ideias em Pixels"
                            description="Landing Page para venda de curso de pixel art"
                            thumb={'/thumbs/pixel.webp'}
                            video="/thumbs/pixel.webm"
                            stack={[
                                <SiTailwindcss size={32} />,
                                <SiReact size={32} />,
                                <SiVite size={32} />,
                                <SiJavascript size={32} />,
                                <SiEslint size={32} />,
                                <SiGit size={32} />,
                                <SiGithub size={32} />,
                            ]} />
                        <ProjectItem
                            title="Geesh - Gerendiador de energias renováveis"
                            description="Torne o consumo de energia sustentável simples, acessível e eficiente."
                            thumb='/thumbs/geesh.webp'
                            video="../../public/thumbs/geesh.webm"
                            stack={[
                                <SiTailwindcss size={32} />,
                                <SiReact size={32} />,
                                <SiVite size={32} />,
                                <SiTypescript size={32} />,
                                <SiFirebase size={32} />,
                                <SiEslint size={32} />,
                                <SiGit size={32} />,
                                <SiGithub size={32} />,
                            ]} />
                    </ProjectList>
                    <ProjectList title="Front-End" icon={<Layers size={32} />}>
                    </ProjectList>
                    <ProjectList title="GameDev" icon={<Pickaxe size={32} />}>
                        <ProjectItem title="Duuts" description="Duuts acaba de ser chamado para uma nova missão: entrar em uma casa mal-assombrada e eliminar qualquer criatura sobrenatural que encontrar. Ele conseguirá sair vivo?" thumb={'/thumbs/duuts.png'} stack={[
                            <SiUnity size={32} />,
                            <SiSharp size={32} />,
                            <SiGit size={32} />,
                            <SiGithub size={32} />,
                        ]} />
                        <ProjectItem
                            title="Flying Sparrow"
                            description="Acha que sabe voar? Pense novamente! Sobreviva ao impossível – Controle um pardal desajeitado que desafia as leis da física (e do bom senso). Seu maior inimigo? Gravidade… e sua própria falta de habilidade."
                            thumb={'/thumbs/sparrow.png'}
                            stack={[
                                <SiUnity size={32} />,
                                <SiSharp size={32} />,
                                <SiGit size={32} />,
                                <SiGithub size={32} />,
                            ]} />
                    </ProjectList>
                </div>
            </div>
        </section>
    )
}
