import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiYoutube } from 'react-icons/si'
import ToolTip from "./components/toolTip"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet"
import { EllipsisVertical, Menu, SquareChevronLeft } from "lucide-react"



function App() {
  return (
    <div className="h-dvh w-dvw relative z-0 overflow-hidden">
      <div className="w-full">
        <div className="lg:hidden flex">
          <Sheet>
            <SheetTrigger asChild className="animate-slide-to-left">
              <SquareChevronLeft className="size-9 stroke-1 absolute right-4 top-4" />
            </SheetTrigger>
            <SheetContent side="right" className="animate-slide-to-left w-full">
              <Navbar main_nav={[
                { title: 'Projetos', href: '/projects' },
                { title: 'O que posso fazer por você', href: '/services' },
                { title: 'Habilidades', href: '/skills' },
                { title: 'Contato', href: '/contact' }]}
                social_nav={[
                  <ToolTip color="black" title='GitHub' icon={<SiGithub className="w-full h-full" />} href='https://github.com/ErykOlliver' />,
                  <ToolTip color="black" title='Youtube' icon={<SiYoutube className="w-full h-full" />} href='https://www.youtube.com/@erykolliver' />,
                  <ToolTip color="black" title='Instagram' icon={<SiInstagram className="w-full h-full" />} href='https://www.instagram.com/erykolliver_?igsh=cTJ2ZXdncWFmMjg5' />,
                  <ToolTip color="black" title='Linkedin' icon={<SiLinkedin className="w-full h-full" />} href='https://www.linkedin.com/in/eryk-olliver-44a0a5295/' />,
                  <ToolTip color="black" title='Whatsapp' icon={<SiWhatsapp className="w-full h-full" />} href='https://wa.me/557183032858' />,

                ]}
              />
            </SheetContent>
          </Sheet>
        </div>
        <div className="w-full hidden lg:flex">
          <Navbar main_nav={[
            { title: 'Projetos', href: '/projects' },
            { title: 'O que posso fazer por você', href: '/services' },
            { title: 'Habilidades', href: '/skills' },
            { title: 'Contato', href: '/contact' }]}
            social_nav={[
              <ToolTip title='GitHub' icon={<SiGithub className="w-full h-full" />} href='https://github.com/ErykOlliver' />,
              <ToolTip title='Youtube' icon={<SiYoutube className="w-full h-full" />} href='https://www.youtube.com/@erykolliver' />,
              <ToolTip title='Instagram' icon={<SiInstagram className="w-full h-full" />} href='https://www.instagram.com/erykolliver_?igsh=cTJ2ZXdncWFmMjg5' />,
              <ToolTip title='Linkedin' icon={<SiLinkedin className="w-full h-full" />} href='https://www.linkedin.com/in/eryk-olliver-44a0a5295/' />,
              <ToolTip title='Whatsapp' icon={<SiWhatsapp className="w-full h-full" />} href='https://wa.me/557183032858' />,
            ]} />
        </div>
      </div>
      <main className=" w-full h-full">
        <Outlet />
      </main>
    </div>
  )
}

export default App
