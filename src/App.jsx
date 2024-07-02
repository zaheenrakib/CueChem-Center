
import { Outlet } from 'react-router-dom'
import Navbar from './components/Home/Navbar/Navbar'
import Footer from './components/Home/Footer/Footer'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
