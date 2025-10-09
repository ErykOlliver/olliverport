import { Star } from "lucide-react";
import ProjectList from "../components/projectList";

export default function Projects() {
    return (
        <section className="Home bg-air_cold/95 pt-28 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/public/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="no-scroll w-[90%] pb-10 flex flex-col gap-2.5 overflow-y-auto text-pure_graphite font-poppins justify-start items-center h-full">
                <header className="flex flex-col w-full">
                    <div className="flex flex-col w-145 gap-1">
                        <h1 className="text-5xl font-semibold">Biblioteca de projetos</h1>
                        <p className="text-pure_graphite/60 italic text-xl uppercase">aqui você encontra os projetos que construí ao longo da minha jornada. Cada um carrega estudo, prática e evolução.</p>
                    </div>
                </header>
                <div className="w-full flex flex-col gap-2.5 justify-center items-center">
                    <ProjectList title="Carros" icon={<Star size={32} />}>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                    </ProjectList>
                    <ProjectList title="Carros" icon={<Star size={32} />}>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                        <div className="w-60 bg-black text-white h-80">carros</div>
                    </ProjectList>
                </div>
            </div>
        </section>
    )
}
