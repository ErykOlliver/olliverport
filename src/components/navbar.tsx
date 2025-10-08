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
        <header>
            <div>
                <div>
                    <img src="../../public/eo.svg" onClick={() => navigate('/')} alt="eryk olliver logo" aria-label="eryk olliver logo" />
                    <nav>
                        <ul>
                            {props.main_nav?.map(item => (
                                <li><a href={item.href}>{item.title}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <nav>
                    {props.social_nav?.map(item => (
                        <div onClick={() => window.open(item.href)}>
                            {item.icon}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    )
}
