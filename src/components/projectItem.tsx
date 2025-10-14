import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


type props = {
    id: number,
    thumb: string,
    video?: string,
    title: string,
    summary: string,
    description: string,
    stack: string[],
    github?: string,
    page?: string,
    plataform?: string,
    function?: string,
    designer?: string,
    designer_page?: string,
}


const limitText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...'

}

export default function ProjectItem(props: props) {
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef<number | undefined>(undefined)
    const navigate = useNavigate();
    return (
        <div
            key={props.id}
            onMouseEnter={() => timeoutRef.current = setTimeout(() => setHovered(true), 500)}
            onMouseLeave={() => { clearTimeout(timeoutRef.current); setHovered(false) }}
            className="animate-slide-to-left group lg:w-100 w-70 border-white transition-all  flex flex-col lg:gap-3.5 gap-1.5 justify-between font-poppins  bg-gradient-to-tl from-gray-200 to-air_cold lg:p-2.5 p-1.5 hover:shadow-[0_2px_10px] shadow-black/60 duration-300 border" >
            <div className="relative border-2 w-full lg:h-64 h-45 border-white overflow-hidden">
                {hovered && props.video ?
                    <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                        <source src={props.video} type="video/webm" />
                    </video>
                    :
                    <img src={props.thumb} className="absolute w-full h-full transition-transform duration-300 ease-out group-hover:scale-110" />
                }
            </div>

            <article className="flex flex-col lg:gap-3.5 gap-1">
                <h2 className="lg:text-2xl text-lg text-start font-medium">{limitText(props.title, 33)}</h2>
                <h3 className="lg:text-2xl text-md text-pure_graphite/60">{limitText(props.summary, 60)}</h3>
                <div className="w-full flex-wrap flex gap-1.5 justify-start items-center ">
                    {props.stack.length > 1 ? (
                        <>
                            {props.stack.slice(0, 2).map(stack => (
                                <p className="text-md rounded-md p-2 animate-slide-to-left  flex border border-white text-pure_graphite/70  justify-center items-center bg-gradient-to-tl from-gray-200 to-air_cold">
                                    {stack}
                                </p>
                            ))}
                            <p className="text-md rounded-md p-2 animate-slide-to-left  flex border border-white text-pure_graphite/70  justify-center items-center bg-gradient-to-tl from-gray-200 to-air_cold">
                                + {props.stack.length - 2}
                            </p>
                        </>
                    ) : (
                        props.stack.map(stack => (
                            <p className="text-md rounded-md p-2 animate-slide-to-left  flex border border-white text-pure_graphite/70  justify-center items-center bg-gradient-to-tl from-gray-200 to-air_cold">
                                {stack}
                            </p>
                        ))
                    )}
                </div>
            </article>
            <button
                onClick={() => navigate(`/projects/${props.id}`, {
                    state: props
                })}
                className="w-full hover:cursor-pointer transition-shadow duration-300 hover:shadow-sm shadow-blue_breeze rounded-lg text-white border-white bg-blue_breeze border-2 font-medium text-xl p-2.5 text-center">
                Ver Projeto
            </button>
        </div >
    )
}
