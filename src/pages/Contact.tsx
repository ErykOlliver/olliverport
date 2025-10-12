import { Mail } from "lucide-react"
import ToolTip from "../components/toolTip"
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si"


export default function Contact() {
    return (
        <section className=" bg-air_cold/90 w-full h-full flex justify-center items-center">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-50">
                <source src="/fogbg.mp4" type="video/mp4" />
            </video>
            <div className="no-scroll w-[90%] flex flex-col gap-2.5 overflow-y-auto text-pure_graphite font-poppins justify-start items-center h-full">
                <div className="w-fit h-full flex flex-col gap-2.5 justify-center items-center">
                    <h1 className="font-semibold text-5xl animate-slide-to-left">Vamos conversar?</h1>
                    <p className="text-2xl text-pure_graphite/60 animate-slide-to-left" >Entre em contato comigo pelo canal que preferir. Respondo em poucas horas.</p>
                    <div className="flex w-full items-center justify-between">
                        <div className="flex gap-1.5 text-xl items-center animate-slide-to-left">
                            <Mail />
                            <span>contato.erykolliver@gmail.com</span>
                        </div>
                        <nav className="flex gap-2.5 justify-center items-center animate-slide-to-left">

                            <ToolTip color="black" title='Instagram' icon={<SiInstagram className="size-5" />} href='https://www.instagram.com/erykolliver_?igsh=cTJ2ZXdncWFmMjg5' />
                            <ToolTip color="black" title='Linkedin' icon={<SiLinkedin className="size-5" />} href='https://www.linkedin.com/in/eryk-olliver-44a0a5295/' />
                            <ToolTip color="black" title='Whatsapp' icon={<SiWhatsapp className="size-5" />} href='https://wa.me/557183032858' />
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}
