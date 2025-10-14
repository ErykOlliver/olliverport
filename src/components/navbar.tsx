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
    const location = useLocation()
    return (
        <header className="w-full bg-transparent  py-5 flex justify-center items-center text-pure_graphite top-0 left-0 fixed z-10">
            <div className="flex sm:flex-row flex-col gap-2.5 justify-between items-center sm:w-[90%] w-full">
                <div className="flex sm:flex-row flex-col sm:justify-center sm:items-center items-center gap-4">
                    <a href="/">
                        <img className="size-14 hover:cursor-pointer" src="/eo.svg" alt="eryk olliver logo" aria-label="eryk olliver logo" />
                    </a>
                    <nav>
                        <ul className="flex sm:flex-row flex-col sm:gap-4.5 gap-2 justify-center items-center">
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
                    <nav className="flex gap-2.5 justify-center sm:border-none border-t px-10 py-2 sm:py-0 sm:px-0 items-center animate-slide-to-left">
                        {props.social_nav?.map(item => (
                            item
                        ))}
                    </nav>
                )}
            </div>
        </header>
    )
}
