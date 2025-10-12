import { useRef, useState } from "react";

type props = {
    thumb: string,
    video?: string,
    title: string,
    description: string,
    stack: React.ReactNode[]
}


const limitText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...'

}

export default function ProjectItem(props: props) {
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef<number | undefined>(undefined)
    return (
        <div
            onMouseEnter={() => timeoutRef.current = setTimeout(() => setHovered(true), 500)}
            onMouseLeave={() => { clearTimeout(timeoutRef.current); setHovered(false) }}
            className="animate-slide-to-left group w-100 border-white transition-all  flex flex-col gap-3.5 justify-between font-poppins bg-air_cold p-2.5 hover:shadow-[0_2px_10px] shadow-black/60 duration-300 border" >
            <div className="relative border-2 w-full h-64 border-white overflow-hidden">
                {hovered && props.video ?
                    <video autoPlay muted loop playsInline>
                        <source src={props.video} type="video/webm" />
                    </video>
                    :
                    <img src={props.thumb} className="absolute w-full h-full transition-transform duration-300 ease-out group-hover:scale-110" />
                }
            </div>

            <article className="flex flex-col gap-3.5">
                <h2 className="text-2xl text-start font-medium">{limitText(props.title, 33)}</h2>
                <h3 className="text-xl text-pure_graphite/60">{limitText(props.description, 60)}</h3>
                <div className="w-full flex-wrap flex gap-1.5 justify-start items-start min-h-28">
                    {props.stack.map(stack => (
                        <div className="size-11 animate-slide-to-left  flex rounded-sm text-pure_graphite/60  justify-center items-center bg-[#D9D9D9]/60">
                            {stack}
                        </div>
                    ))}
                </div>
            </article>
            <a href="#" className="w-full transition-shadow duration-300 hover:shadow-sm shadow-blue_breeze rounded-lg text-white border-white bg-gradient-to-r from-deep_sea to-blue_breeze border-2 font-semibold text-2xl p-2.5 text-center">Ver Projeto</a>
        </div >
    )
}
