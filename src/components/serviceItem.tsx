
type props = {
    thumb: string,
    title: string,
    description: string,
}

export default function ServiceItem(props: props) {

    return (
        <div className="animate-slide-to-left flex flex-col rounded-md gap-2 h-full w-full shadow-md p-5 text-pure_graphite hover:border-blue_breeze transition-all border-2 justify-center items-center lg:items-start border-white bg-air_cold">
            <img src={props.thumb} alt={props.title} className="lg:size-44 size-40" />
            <div className="flex flex-col gap-1.5">
                <h2 className="lg:text-2xl text-lg lg:text-start text-center font-medium">{props.title}</h2>
                <p className="lg:text-lg text-md text-pure_graphite/60 lg:text-start text-center">{props.description}</p>
            </div>
        </div>
    )
}
