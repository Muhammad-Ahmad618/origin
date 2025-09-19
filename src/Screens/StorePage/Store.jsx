import NavBar from '../../Components/StoreNavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer'
import CartProvider from '../../CartContext/CartContext'


export default function Store() {

  return (
    <CartProvider>
    <div className='min-h-screen bg-[#121212]'>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
    </CartProvider>
  )
}
