import NavBar from '../../Components/StoreNavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer'


export default function Store() {

  return (
    <div className='min-h-screen bg-[#121212]'>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
