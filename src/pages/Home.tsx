import StackCarousel from "../components/stackCarousel";

export default function Home() {
    return (
        <section className="Home lg:bg-air_cold/90 bg-air_cold/95 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="w-[90%] flex justify-between items-center h-full">
                <article className="flex text-pure_graphite font-poppins w-full lg:w-[50%] flex-col gap-5 relative animate-slide-to-right">
                    <div className="flex flex-col gap-2 lg:gap-5 text-center lg:text-start items-center lg:items-start justify-center">
                        <span className="lg:text-4xl text-xl font-light">Olá Mundo, eu sou</span>
                        <h1 className="flex flex-col font-semibold text-5xl lg:text-8xl">Eryk Olliver</h1>
                        <h2 className="animate-pulse text-xl lg:text-2xl font-light uppercase italic">DESENVOLVEDOR • FRONT-END</h2>
                    </div>
                    <p className="lg:text-xl text-sm w-full text-center lg:text-start">
                        Desenvolvo <span className="text-deep_sea"> aplicações </span>modernas e <span className="text-deep_sea"> eficientes </span>, com foco em <span className="text-deep_sea"> interfaces </span>
                        acessíveis e <span className="text-deep_sea"> experiências </span> marcantes, sempre mantendo qualidade no <span className="text-deep_sea"> código </span> e usabilidade no centro.
                    </p>
                    <a href="/contact" className="lg:font-bold font-medium text-md lg:text-2xl border-white lg:border-2 border w-full h-fit py-3 lg:py-5 text-center rounded-md lg:rounded-lg transition-shadow duration-300 hover:shadow-[0_0_20px] shadow-blue_breeze text-air_cold bg-blue_breeze ">Contratar Serviço</a>
                    <div className="flex flex-col gap-1.5 items-center lg:items-start">
                        <h3 className="font-medium text-xl lg:text-2xl">Minha Stack de Tecnologias</h3>
                        <StackCarousel stack={[
                            { Icon: '/stack/astro-icon.svg', title: 'Astro' },
                            { Icon: '/stack/expo-icon.svg', title: 'Expo' },
                            { Icon: '/stack/fastify-icon.svg', title: 'Fastify' },
                            { Icon: '/stack/firebase-icon.svg', title: 'Firebase' },
                            { Icon: '/stack/git-icon.svg', title: 'Git' },
                            { Icon: '/stack/github-icon.svg', title: 'GitHub' },
                            { Icon: '/stack/nextjs-icon.svg', title: 'NextJS' },
                            { Icon: '/stack/nodejs-icon-alt.svg', title: 'NodeJS' },
                            { Icon: '/stack/vercel-icon.svg', title: 'Vercel' },
                            { Icon: '/stack/vitejs.svg', title: 'Vite' },
                            { Icon: '/stack/webpack.svg', title: 'Webpack' },
                            { Icon: '/stack/figma.svg', title: 'Figma' },
                            { Icon: '/stack/wordpress-icon.svg', title: 'WordPress' },
                            { Icon: '/stack/tailwindcss-icon.svg', title: 'TailwindCSS' },
                            { Icon: '/stack/unity.svg', title: 'Unity' },
                            { Icon: '/stack/notion-icon.svg', title: 'Notion' },
                            { Icon: '/stack/mongodb-icon.svg', title: 'MongoDB' },
                            { Icon: '/stack/eslint.svg', title: 'ESLint' },
                            { Icon: '/stack/css-3.svg', title: 'CSS3' },
                            { Icon: '/stack/bootstrap.svg', title: 'Bootstrap' },
                            { Icon: '/stack/express.svg', title: 'Express' },
                        ]} />
                    </div>
                </article>
                <img src="/ErykOlliver.png" alt="" className="animate-slide-to-left z-1 duration-500 lg:fixed hidden lg:inline lg:right-15 lg:top-36 w-25 lg:w-130" />
                <img src="/Shape.png" className="fixed top-0 -z-0 right-0 animate-slide-to-left duration-1000 w-80 hidden lg:flex lg:w-160" alt="" />

            </div>
        </section>
    )
}
