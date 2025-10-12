import StackCarousel from "../components/stackCarousel";

export default function Home() {
    return (
        <section className="Home bg-air_cold/90 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="w-[90%] flex justify-between items-center h-full">
                <article className="text-pure_graphite font-poppins w-[50%] flex flex-col gap-5 relative animate-slide-to-right">
                    <div className="flex flex-col gap-5">
                        <span className="text-4xl font-light">Olá Mundo, eu sou</span>
                        <h1 className="flex flex-col font-semibold text-8xl">Eryk Olliver</h1>
                        <h2 className="animate-pulse text-2xl font-light uppercase italic">DESENVOLVEDOR • FRONT-END</h2>
                    </div>
                    <p className="text-xl w-full">
                        Desenvolvo <span className="text-deep_sea"> aplicações </span>modernas e <span className="text-deep_sea"> eficientes </span>, com foco em <span className="text-deep_sea"> interfaces </span>
                        acessíveis e <span className="text-deep_sea"> experiências </span> marcantes, sempre mantendo qualidade no <span className="text-deep_sea"> código </span> e usabilidade no centro.
                    </p>
                    <a href="#" className="font-bold text-2xl border-white border-2 w-full h-fit py-5 text-center rounded-lg transition-shadow duration-300 hover:shadow-[0_0_20px] shadow-blue_breeze text-air_cold bg-blue_breeze ">Contratar Serviço</a>
                    <div>
                        <h3 className="font-medium text-2xl">Minha Stack de Tecnologias</h3>
                        <StackCarousel stack={[
                            { Icon: '/astro-icon.svg', title: 'Astro' },
                            { Icon: '/expo-icon.svg', title: 'Expo' },
                            { Icon: '/fastify-icon.svg', title: 'Fastify' },
                            { Icon: '/firebase-icon.svg', title: 'Firebase' },
                            { Icon: '/git-icon.svg', title: 'Git' },
                            { Icon: '/github-icon.svg', title: 'GitHub' },
                            { Icon: '/nextjs-icon.svg', title: 'NextJS' },
                            { Icon: '/nodejs-icon-alt.svg', title: 'NodeJS' },
                            { Icon: '/vercel-icon.svg', title: 'Vercel' },
                            { Icon: '/vitejs.svg', title: 'Vite' },
                            { Icon: '/webpack.svg', title: 'Webpack' },
                            { Icon: '/figma.svg', title: 'Figma' },
                            { Icon: '/wordpress-icon.svg', title: 'WordPress' },
                            { Icon: '/tailwindcss-icon.svg', title: 'TailwindCSS' },
                            { Icon: '/unity.svg', title: 'Unity' },
                            { Icon: '/notion-icon.svg', title: 'Notion' },
                            { Icon: '/mongodb-icon.svg', title: 'MongoDB' },
                            { Icon: '/eslint.svg', title: 'ESLint' },
                            { Icon: '/css-3.svg', title: 'CSS3' },
                            { Icon: '/bootstrap.svg', title: 'Bootstrap' },
                            { Icon: '/express.svg', title: 'Express' },
                        ]} />
                    </div>
                </article>
                <img src="/ErykOlliver.png" alt="" className="animate-slide-to-left z-1 duration-500 fixed right-15 top-36" />
                <img src="/Shape.png" className="fixed top-0 -z-0 right-0 animate-slide-to-left duration-1000" alt="" />

            </div>
        </section>
    )
}
