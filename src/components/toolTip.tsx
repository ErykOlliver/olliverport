

type props = {
    title: string
    icon: React.ReactNode,
    href: string
    color?: 'white' | 'black'
}


export default function ToolTip(props: props) {
    const render = () => {
        switch (props.color) {
            case "white":

                return (
                    <button aria-label={props.title} className="group  text-air_cold border size-9 flex justify-center items-center rounded-full hover:cursor-pointer hover:text-blue_breeze hover:size-10 ease-out transition-all" onClick={() => window.open(props.href)}>
                        {props.icon}
                        <span className="sr-only">{props.title}</span>
                        <p className={`absolute -bottom-10 animate-viewpop shadow-2xl text-sm rounded-md border border-white hidden group-hover:flex py-1.5 px-2.5 text-air_cold`}>{props.title}</p>
                    </button>
                )

            case 'black':
                return (
                    <button aria-label={props.title} className="group  text-pure_graphite border size-9 flex justify-center items-center rounded-full hover:cursor-pointer hover:text-blue_breeze hover:size-10 ease-out transition-all" onClick={() => window.open(props.href)}>
                        {props.icon}
                        <span className="sr-only">{props.title}</span>
                        <p className={`absolute -bottom-10 animate-viewpop shadow-2xl text-sm rounded-md border border-pure_graphite hidden group-hover:flex py-1.5 px-2.5 text-pure_graphite`}>{props.title}</p>
                    </button>
                )
            default:
                return (
                    <button aria-label={props.title} className="group  text-air_cold border size-9 flex justify-center items-center rounded-full hover:cursor-pointer hover:text-blue_breeze hover:size-10 ease-out transition-all" onClick={() => window.open(props.href)}>
                        {props.icon}
                        <span className="sr-only">{props.title}</span>
                        <p className={`absolute -bottom-10 animate-viewpop shadow-2xl text-sm rounded-md border border-white hidden group-hover:flex py-1.5 px-2.5 text-air_cold`}>{props.title}</p>
                    </button>
                )
        }
    }

    return (
        <>
        { render() }
        </>
    )
}
