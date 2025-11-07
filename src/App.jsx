import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import LandingPage from './Screens/LandingPage/LandingPage';
import SignIn from './Screens/LoginPage/SignIn';
import Register from './Screens/LoginPage/SignIn';
import Store from './Screens/StorePage/Store';
import GameDetail from './Components/Interface/GameDetails_Interface'
import CartPage from './Screens/CartPage/CartPage';
import WishlistPage from './Screens/WishlistPage/WishlistPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreContent from './Screens/StoreContent/StoreContent';
import { SpeedInsights } from "@vercel/speed-insights/react"  
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import CouponPage from './Screens/CouponPage/CouponPage';
import WalletPage from './Screens/WalletPage/WalletPage';


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
      cacheTime: Infinity,
  },
}
})

function App() {
  return (
    <>
     <QueryClientProvider client={queryClient}>
       <SpeedInsights />
      <Router>
        <ScrollToTop/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/SignIn' element={<SignIn heading='Sign in to your Account'/>} />
        <Route path='/Register' element={<Register heading={`Create an Account`}/>} />
        <Route path='/Store' element={<Store/>}>
         <Route index element={<StoreContent/>} />
         <Route path='Cart' element={<CartPage/>}/>
         <Route path='WishList' element={<WishlistPage/>}/>
         <Route path='Coupons' element={<CouponPage/>}/>
         <Route path='Wallet' element={<WalletPage/>}/>
        </Route>
        <Route path='/Store/GameDetail' element={<GameDetail/>} />
      </Routes>
    </Router>
    </QueryClientProvider>
    </>
  )
}

export default App
