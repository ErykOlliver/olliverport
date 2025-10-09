interface StackListProps {
    Icon: string;
    title: string
}

type props = {
    stack: StackListProps[]
}

export default function StackCarousel(props: props) {
    return (
        <div className="no-scroll w-full flex overflow-x-hidden">
            <div className={`flex gap-4 ${props.stack.length > 5 ? 'animate-carousel-spin' : 'animate-none'} justify-center items-center p-2`}>
                {props.stack.map(stack => (
                    <div className="flex size-16 p-3.5 justify-center  items-center rounded-lg border-2">
                        <img src={stack.Icon} className="size-10" alt={stack.title} />
                    </div>
                ))}
            </div>
            {props.stack.length >= 5 && (
                <div className={`flex gap-4 ${props.stack.length > 5 ? 'animate-carousel-spin' : 'animate-none'} justify-center items-center p-2`}>
                    {props.stack.map(stack => (
                        <div className="flex size-16 p-3.5 justify-center items-center rounded-lg border-2">
                            <img src={stack.Icon} className="size-10" alt={stack.title} />
                        </div>
                    ))}
                </div>)
            }

        </div>
    )
}
