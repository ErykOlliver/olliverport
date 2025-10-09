type props = {
    thumb: string,
    title: string,
    description: string,
    stack: React.ReactNode[]
}


export default function ProjectItem(props: props) {
    return (
        <div>
            <img src={props.thumb} alt="" />
            <article>
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
                <div>
                    {props.stack.map(stack => (
                        <div>{stack}</div>
                    ))}
                </div>
            </article>
            <a href="#">Ver Projeto</a>
        </div>
    )
}
