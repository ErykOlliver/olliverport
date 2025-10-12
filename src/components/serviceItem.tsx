
type props = {
    thumb: string,
    title: string,
    description: string,
}

export default function ServiceItem(props: props) {

    return (
        <div className="animate-slide-to-left flex flex-col rounded-md gap-2 h-full w-full shadow-md p-5 text-pure_graphite hover:border-blue_breeze transition-all border-2 justify-center items-start border-white bg-air_cold">
            <img src={props.thumb} alt={props.title} className="size-44" />
            <div className="flex flex-col gap-1.5">
                <h2 className="text-2xl font-medium">{props.title}</h2>
                <p className="text-lg text-pure_graphite/60">{props.description}</p>
            </div>
        </div>
    )
}
