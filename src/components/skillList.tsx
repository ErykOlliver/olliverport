import { Boxes } from "lucide-react"
import React from "react"

type props = {
    title: string,
    children?: React.ReactNode
}


export default function SkillList(props: props) {
    return (
        <div className="w-full  flex flex-col  gap-3">
            <header className="animate-slide-to-right flex border-b gap-1.5  py-1.5 w-full justify-start items-center">
                <h2 className="text-3xl font-medium">{props.title}</h2>
            </header>
            <div className="no-scroll w-full h-full  justify-start items-center p-2.5">
                {
                    props.children ?
                        <div className="flex flex-wrap w-full h-full items-center gap-4">
                            {props.children}
                        </div>
                        :
                        <div className="w-full animate-pulse h-100 flex flex-col justify-center items-center">
                            <Boxes className="animate-bounce" size={32} />
                            <h3 className="text-xl">Em breve essa seção estará cheia de projetos!</h3>
                        </div>
                }
            </div>
        </div>
    )
}
