import { Crown, Layers, Pickaxe } from "lucide-react";
import ProjectList from "../components/projectList";
import ProjectItem from "../components/projectItem";

export default function Projects() {
    return (
        <section className=" bg-air_cold/90 pt-28 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/public/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="no-scroll w-[90%] flex flex-col gap-2.5 overflow-y-auto text-pure_graphite font-poppins justify-start items-center h-full">
                <header className="flex flex-col w-full ">
                    <div className="animate-slide-to-right flex flex-col w-166 gap-3.5">
                        <h1 className="text-5xl font-semibold">Biblioteca de projetos</h1>
                        <p className="text-pure_graphite/60 italic text-xl ">aqui você encontra os projetos que construí ao longo da minha jornada. Cada um carrega estudo, prática e evolução.</p>
                    </div>
                </header>
                <div className="w-full flex flex-col gap-1.5 justify-center items-center">
                    <ProjectList title="Em Destaque" icon={<Crown size={32} />}>
                        <ProjectItem
                            id={1}
                            title="Pixel Power - Transforme ideias em Pixels"
                            summary="Landing Page para venda de curso de pixel art"
                            description="Pixel Power é um projeto ambicioso que combina educação digital com uma experiência de compra fluida. A plataforma foi desenvolvida para artistas digitais que desejam monetizar seus conhecimentos em pixel art."
                            thumb={'/thumbs/pixel.webp'}
                            video="/thumbs/pixel.webm"
                            stack={[
                                'Javascript',
                                'Vite',
                                'React',
                                'Git',
                                'GitHub',
                                'ESLint',
                                'TailwindCSS',
                                'Notion',
                                'Figma',
                            ]}
                            github="https://github.com/ErykOlliver/Pixel-Power---Transforme-ideias-em-pixels"
                            plataform="Aplicação Web"
                            function="Programador, Designer UI/UX"
                            designer="Eryk Olliver"
                            designer_page="/"

                        />
                        <ProjectItem
                            id={2}
                            title="Geesh - Gerendiador de energias renováveis"
                            summary="Torne o consumo de energia sustentável simples, acessível e eficiente."
                            description="O Geesh é um aplicativo desenvolvido por alunos do 3º ano de Mecatrônica do CETEP RM, com a missão de tornar o gerenciamento de energia renovável simples, acessível e eficiente."
                            thumb='/thumbs/geesh.webp'
                            video="/thumbs/geesh.webm"
                            stack={[
                                'Typescript',
                                'Firebase',
                                'Notion',
                                'Figma',
                                'Vite',
                                'Git',
                                'GitHub',
                                'ESLint',
                                'TailwindCSS',
                                'Expo',
                                'React Native',
                            ]}
                            plataform="Aplicação Web, Aplicação Móvel"
                            github="https://github.com/ErykOlliver/Geesh"
                            page="https://teamgeesh.github.io/geesh-website/"
                            function="Lider, Programador, Designer UI/UX"
                            designer="Eryk Olliver"
                            designer_page="/"
                        />
                    </ProjectList>
                    <ProjectList title="Front-End" icon={<Layers size={32} />}>
                    </ProjectList>
                    <ProjectList title="GameDev" icon={<Pickaxe size={32} />}>
                        <ProjectItem
                            id={3}
                            title="Duuts"
                            summary="Duuts acaba de ser chamado para uma nova missão: entrar em uma casa mal-assombrada e eliminar qualquer criatura sobrenatural que encontrar. Ele conseguirá sair vivo?"
                            description="Olá, amigos! Este é meu primeiro jogo. Criei este projeto como uma forma de aprender e me desafiar. Espero que você goste de pelo menos parte disso. Estou aberto a sugestões e feedback porque, quem sabe, talvez eu possa atualizá-lo e melhorá-lo?"
                            thumb={'/thumbs/duuts.png'}
                            stack={[
                                'CSharp',
                                'Git',
                                'GitHub',
                                'Unity',
                            ]}
                            plataform="Desktop"
                            page="https://drewygamedev.itch.io/duuts"
                            function="Programador e Designer UI/UX"
                            designer="Eryk Olliver"
                            designer_page="/"
                        />
                        <ProjectItem
                            id={4}
                            title="Flying Sparrow"
                            summary="Acha que sabe voar? Pense novamente! Sobreviva ao impossível – Controle um pardal desajeitado que desafia as leis da física (e do bom senso). Seu maior inimigo? Gravidade… e sua própria falta de habilidade."
                            description="Prepare-se para rir, chorar e cair (muito). Em Flying Sparrow, você controla um pardal com menos coordenação que uma gelatina em terremoto. A única missão? Tentar voar. O resultado? Catastrófico. Com um único toque na tela, você controla tudo. Parece fácil? Nem um pouco. Mas ei, é só continuar tentando… até o chão te abraçar de novo."
                            thumb={'/thumbs/sparrow.png'}
                            stack={[
                                'CSharp',
                                'Git',
                                'GitHub',
                                'Unity',
                            ]}
                            plataform="Android"
                            function="Programador e Designer UI/UX"
                            designer="Eryk Olliver"
                            designer_page="/"
                            page="https://play.google.com/store/apps/details?id=com.drewystudios.FlyingSparrow&pli=1"

                        />
                    </ProjectList>
                </div>
            </div>
        </section>
    )
}
