import { useNavigate } from "react-router-dom"

interface mainNavProps {
    title: string,
    href: string
}
interface socialNavProps {
    icon: React.ReactNode,
    href: string
}

interface socialNavProps {
    title: string
}

type props = {
    main_nav?: mainNavProps[]
    social_nav?: socialNavProps[]
}


export default function Navbar(props: props) {
    let navigate = useNavigate();
    return (
        <header className="w-full py-5 flex justify-center items-center text-pure_graphite top-0 left-0 fixed z-10">
            <div className="flex justify-between items-center w-[90%]">
                <div className="flex justify-center items-center gap-4">
                    <img className="size-14 hover:cursor-pointer" src="../../public/eo.svg" onClick={() => navigate('/')} alt="eryk olliver logo" aria-label="eryk olliver logo" />
                    <nav>
                        <ul className="flex gap-2.5 justify-center items-center">
                            {props.main_nav?.map(item => (
                                <li >
                                    <a aria-label={item.title} className="text-xl font-poppins text-pure_graphite hover:text-pure_graphite/60 hover:text-lg ease-out transition-all" href={item.href}>{item.title}</a>
                                    <span className="sr-only">{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <nav className="flex gap-2.5 justify-center items-center">
                    {props.social_nav?.map(item => (
                        <div aria-label={item.title} className="group text-air_cold border size-9 flex justify-center items-center rounded-full hover:cursor-pointer hover:text-blue_breeze hover:size-10 ease-out transition-all" onClick={() => window.open(item.href)}>
                            {item.icon}
                            <span className="sr-only">{item.title}</span>
                            <p className={`absolute -bottom-4 animate-viewpop shadow-2xl text-sm rounded-md border border-white hidden group-hover:flex py-1.5 px-2.5 text-air_cold`}>{item.title}</p>
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    )
}
