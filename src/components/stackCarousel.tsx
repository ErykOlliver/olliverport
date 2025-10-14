interface StackListProps {
    Icon: string;
    title: string
}

type props = {
    stack: StackListProps[]
}

export default function StackCarousel(props: props) {
    return (
        <div className="animate-slide-to-right no-scroll w-full flex overflow-x-hidden">
            <div className={`flex gap-4 ${props.stack.length > 5 ? 'animate-carousel-spin' : 'animate-none'} justify-center items-center p-2`}>
                {props.stack.map(stack => (
                    <div className="flex size-10 sm:size-16 sm:p-3.5 p-2.5 justify-center items-center rounded-md sm:rounded-lg sm:border-2 border border-pure_graphite">
                        <img src={stack.Icon} className="w-full h-full" alt={stack.title} />
                    </div>
                ))}
            </div>
            {props.stack.length >= 5 && (
                <div className={`flex gap-4 ${props.stack.length > 5 ? 'animate-carousel-spin' : 'animate-none'} justify-center items-center p-2`}>
                    {props.stack.map(stack => (
                        <div className="flex size-10 sm:size-16 sm:p-3.5 p-2.5 justify-center  items-center rounded-md sm:rounded-lg sm:border-2 border border-pure_graphite">
                            <img src={stack.Icon} className="w-full h-full" alt={stack.title} />
                        </div>
                    ))}
                </div>)
            }

        </div>
    )
}
