import { useNavigate } from "react-router-dom";
import SkillList from "../components/skillList";
import SkillItem from "../components/skillItem";
import { SiAstro, SiBootstrap, SiCss3, SiEslint, SiExpo, SiExpress, SiFastify, SiFigma, SiFirebase, SiGit, SiGithub, SiJavascript, SiMongodb, SiNextbilliondotai, SiNextdotjs, SiNodedotjs, SiNotion, SiReact, SiTailwindcss, SiTypescript, SiUnity, SiVercel, SiVite, SiWebpack, SiWordpress } from "react-icons/si";
import { Layout, LucideWorkflow, PencilRuler, School } from "lucide-react";
import { RiEnglishInput } from "react-icons/ri";

export default function Skills() {
    return (
        <section className="Home bg-air_cold/95 pt-28 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/public/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="no-scroll w-[90%] pb-10 flex flex-col gap-2.5 overflow-y-auto text-pure_graphite font-poppins justify-start items-center h-full">
                <header className="flex animate-slide-to-right flex-col w-full">
                    <div className="flex flex-col w-166 gap-3.5">
                        <h1 className="text-5xl font-semibold">Meu Grimório de Habilidades.</h1>
                        <p className="text-pure_graphite/60 italic text-xl ">As tecnologias, linguagens e habilidades que me acompanham no desenvolvimento de soluções digitais.</p>
                    </div>
                </header>
                <SkillList title="Especialidades">
                    <SkillItem type="soft" ico={<RiEnglishInput className="w-full h-full" />} title="Inglês" info="Em Formação" />
                    <SkillItem type="soft" ico={<School className="w-full h-full" />} title="Autodidata" />
                    <SkillItem type="soft" ico={<Layout className="w-full h-full" />} title="Front-End" />
                    <SkillItem type="soft" ico={<PencilRuler className="w-full h-full" />} title="Designer UI/UX" />
                    <SkillItem type="soft" ico={<LucideWorkflow className="w-full h-full" />} title="Proativo" />
                </SkillList>
                <SkillList title="Tecnologias">
                    <SkillItem type="hard" ico={<SiVite className="w-full h-full" />} title="Vite" />
                    <SkillItem type="hard" ico={<SiReact className="w-full h-full" />} title="React" />
                    <SkillItem type="hard" ico={<SiJavascript className="w-full h-full" />} title="Javascript" />
                    <SkillItem type="hard" ico={<SiTypescript className="w-full h-full" />} title="Typescript" />
                    <SkillItem type="hard" ico={<SiEslint className="w-full h-full" />} title="ESList" />
                    <SkillItem type="hard" ico={<SiNextdotjs className="w-full h-full" />} title="NextJS" />
                    <SkillItem type="hard" ico={<SiGit className="w-full h-full" />} title="Git" />
                    <SkillItem type="hard" ico={<SiGithub className="w-full h-full" />} title="GitHub" />
                    <SkillItem type="hard" ico={<SiFirebase className="w-full h-full" />} title="Firebase" />
                    <SkillItem type="hard" ico={<SiFastify className="w-full h-full" />} title="Fastify" />
                    <SkillItem type="hard" ico={<SiAstro className="w-full h-full" />} title="Astro" />
                    <SkillItem type="hard" ico={<SiExpo className="w-full h-full" />} title="Expo" />
                    <SkillItem type="hard" ico={<SiNodedotjs className="w-full h-full" />} title="NodeJS" />
                    <SkillItem type="hard" ico={<SiVercel className="w-full h-full" />} title="Vercel" />
                    <SkillItem type="hard" ico={<SiFigma className="w-full h-full" />} title="Figma" />
                    <SkillItem type="hard" ico={<SiWebpack className="w-full h-full" />} title="Webpack" />
                    <SkillItem type="hard" ico={<SiWordpress className="w-full h-full" />} title="Wordpress" />
                    <SkillItem type="hard" ico={<SiTailwindcss className="w-full h-full" />} title="TailwindCSS" />
                    <SkillItem type="hard" ico={<SiUnity className="w-full h-full" />} title="Unity" />
                    <SkillItem type="hard" ico={<SiMongodb className="w-full h-full" />} title="MongoDB" />
                    <SkillItem type="hard" ico={<SiCss3 className="w-full h-full" />} title="CSS3" />
                    <SkillItem type="hard" ico={<SiBootstrap className="w-full h-full" />} title="Bootstrap" />
                    <SkillItem type="hard" ico={<SiExpress className="w-full h-full" />} title="Express" />
                </SkillList>
            </div>
        </section>
    )
}
