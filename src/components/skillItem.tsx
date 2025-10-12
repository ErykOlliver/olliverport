
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
                    <div className="animate-slide-to-left flex rounded-md gap-1 h-fit w-fit px-5 shadow-md p-3 text-pure_graphite hover:border-blue_breeze hover:text-blue_breeze transition-all border justify-center items-center border-pure_graphite">
                        <div className="size-7 flex items-center justify-center">
                            {props.ico}
                        </div>
                        <span className="text-lg text-pure_graphite/60">{props.title}</span>
                    </div>
                )

            case 'soft':
                return (
                    <div className="animate-slide-to-left flex flex-col rounded-md gap-1 min-h-44 min-w-44 transition-all shadow-md  text-pure_graphite hover:border-blue_breeze hover:text-blue_breeze border justify-center items-center border-pure_graphite">
                        <div className="size-7 flex items-center justify-center">
                            {props.ico}
                        </div>
                        <span className="text-lg text-pure_graphite">{props.title}</span>
                        <span className="text-lg text-pure_graphite/60 italic">{props.info}</span>
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
