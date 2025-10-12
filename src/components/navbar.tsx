import { useLocation, useNavigate } from "react-router-dom"

interface mainNavProps {
    title: string,
    href: string
}

type props = {
    main_nav?: mainNavProps[]
    social_nav?: React.ReactNode[]
}


export default function Navbar(props: props) {
    let navigate = useNavigate();
    const location = useLocation()
    return (
        <header className="w-full bg-transparent  py-5 flex justify-center items-center text-pure_graphite top-0 left-0 fixed z-10">
            <div className="flex justify-between items-center w-[90%]">
                <div className="flex justify-center items-center gap-4">
                    <img className="size-14 hover:cursor-pointer" src="/eo.svg" onClick={() => navigate('/')} alt="eryk olliver logo" aria-label="eryk olliver logo" />
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

                {location.pathname === '/' && (
                    <nav className="flex gap-2.5 justify-center items-center animate-slide-to-left">
                        {props.social_nav?.map(item => (
                            item
                        ))}
                    </nav>
                )}
            </div>
        </header>
    )
}
