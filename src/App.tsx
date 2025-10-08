import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"



function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App
