import { useNavigate } from "react-router-dom"

interface mainNavProps {
    title: string,
    href: string
}
interface socialNavProps {
    icon: React.ReactNode,
    href: string
}

type props = {
    main_nav?: mainNavProps[]
    social_nav?: socialNavProps[]
}


export default function Navbar(props: props) {
    let navigate = useNavigate();
    return (
        <header className="w-full flex justify-center items-center text-pure_graphite py-5">
            <div className="flex justify-between items-center w-[90%]">
                <div className="flex justify-center items-center gap-4">
                    <img className="size-14 hover:cursor-pointer" src="../../public/eo.svg" onClick={() => navigate('/')} alt="eryk olliver logo" aria-label="eryk olliver logo" />
                    <nav>
                        <ul className="flex gap-2.5 justify-center items-center">
                            {props.main_nav?.map(item => (
                                <li><a className="text-xl font-poppins text-pure_graphite hover:text-pure_graphite/60 hover:text-lg ease-out transition-all" href={item.href}>{item.title}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <nav className="flex gap-2.5 justify-center items-center">
                    {props.social_nav?.map(item => (
                        <div className="border-2 size-11 flex justify-center items-center rounded-md hover:cursor-pointer hover:text-pure_graphite/60 hover:size-10 ease-out transition-all" onClick={() => window.open(item.href)}>
                            {item.icon}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    )
}
