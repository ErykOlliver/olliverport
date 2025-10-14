
type skillType = 'soft' | 'hard'

type props = {
    ico: React.ReactNode,
    title: string,
    info?: string,
    type: skillType
}

export default function SkillItem(props: props) {
    const render = () => {
        switch (props.type) {
            case "hard":

                return (
                    <div className="animate-slide-to-left flex rounded-md gap-1 lg:h-fit lg:w-fit lg:px-5 shadow-md p-3 bg-gradient-to-tl from-gray-200 to-air_cold text-pure_graphite hover:border-blue_breeze hover:text-blue_breeze transition-all border justify-center items-center border-white">
                        <div className="size-7 flex items-center justify-center">
                            {props.ico}
                        </div>
                        <span className="lg:text-lg text-sm text-pure_graphite text-start font-medium">{props.title}</span>
                    </div>
                )

            case 'soft':
                return (
                    <div className="animate-slide-to-left flex flex-col rounded-md gap-1 lg:min-h-44 lg:min-w-44 min-h-24 min-w-24 bg-gradient-to-tl from-gray-200 to-air_cold transition-all shadow-md  text-pure_graphite hover:border-blue_breeze hover:text-blue_breeze border justify-center items-center border-white">
                        <div className="size-7 flex items-center justify-center">
                            {props.ico}
                        </div>
                        <span className="lg:text-lg text-sm text-pure_graphite text-start font-medium">{props.title}</span>
                        <span className="lg:text-md text-sm text-start text-pure_graphite/60 italic">{props.info}</span>
                    </div>
                )
        }
    }
    return (
        <>
            {render()}
        </>
    )
}
