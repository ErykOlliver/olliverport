import React from "react"

type props = {
    icon: React.ReactNode,
    title: string,
    children: React.ReactNode
}


export default function ProjectList(props: props) {
    return (
        <div className="w-full flex flex-col gap-3">
            <header className="flex border-b w-full justify-start items-center">
                {props.icon}
                <h2 className="text-3xl">{props.title}</h2>
            </header>
            <div className="c-project-list hover:cursor-grab overflow-x-auto w-full justify-start items-center border p-2.5">
                <div className="flex w-fit gap-2.5">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
