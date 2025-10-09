import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiYoutube } from 'react-icons/si'



function App() {
  return (
    <div className="bg-air_cold h-dvh w-dvw relative z-0 overflow-hidden">
      <Navbar main_nav={[
        { title: 'Projetos', href: '/#' },
        { title: 'O que posso fazer por você', href: '/#' },
        { title: 'Habilidades', href: '/#' },
        { title: 'Contato', href: '/about' }]}
        social_nav={[
          { title: 'GitHub', icon: <SiGithub className="size-5" />, href: 'https://github.com/ErykOlliver' },
          { title: 'Youtube', icon: <SiYoutube className="size-5" />, href: 'https://www.youtube.com/@erykolliver' },
          { title: 'Instagram', icon: <SiInstagram className="size-5" />, href: 'https://www.instagram.com/erykolliver_?igsh=cTJ2ZXdncWFmMjg5' },
          { title: 'Linkedin', icon: <SiLinkedin className="size-5" />, href: 'https://www.linkedin.com/in/eryk-olliver-44a0a5295/' },
          { title: 'Whatsapp', icon: <SiWhatsapp className="size-5" />, href: 'https://wa.me/557183032858' },
        ]} />
      <main className="pt-24 w-full h-full">
        <Outlet />
      </main>
    </div>
  )
}

export default App
