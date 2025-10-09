import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiYoutube } from 'react-icons/si'



function App() {
  return (
    <div className="bg-air_cold h-dvh w-dvw">
      <Navbar main_nav={[
        { title: 'Projetos', href: '#' },
        { title: 'O que posso fazer por você', href: '#' },
        { title: 'Habilidades', href: '#' },
        { title: 'Contato', href: '#' }]}
        social_nav={[
          { icon: <SiGithub className="size-5" />, href: 'https://github.com/ErykOlliver' },
          { icon: <SiYoutube className="size-5" />, href: 'https://www.youtube.com/@erykolliver' },
          { icon: <SiInstagram className="size-5" />, href: 'https://www.instagram.com/erykolliver_?igsh=cTJ2ZXdncWFmMjg5' },
          { icon: <SiLinkedin className="size-5" />, href: 'https://www.linkedin.com/in/eryk-olliver-44a0a5295/' },
          { icon: <SiWhatsapp className="size-5" />, href: 'https://wa.me/557183032858' },
        ]} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
