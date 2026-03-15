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
import NewsPage from './Screens/NewsPage/NewsPage';
import LibraryPage from './Screens/LibraryPage/LibraryPage';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/sign-in' element={<SignIn heading='Sign in to your Account' />} />
            <Route path='/register' element={<Register heading={`Create an Account`} />} />
            <Route path='/store' element={<Store />}>
              <Route index element={<StoreContent />} />
              <Route path='cart' element={<CartPage />} />
              <Route path='wishList' element={<WishlistPage />} />
              <Route path='coupons' element={<CouponPage />} />
              <Route path='wallet' element={<WalletPage />} />
              <Route path='news' element={<NewsPage />} />
              <Route path='library' element={<LibraryPage />} />
            </Route>
            <Route path='/Store/GameDetail' element={<GameDetail />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
