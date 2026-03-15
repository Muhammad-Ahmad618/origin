import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignIn from "./Pages/LoginPage/SignIn";
import Register from "./Pages/LoginPage/SignIn";
import Store from "./Pages/StorePage/Store";
import CartPage from "./Pages/CartPage/CartPage";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreContent from "./Pages/StoreContent/StoreContent";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./Components/utility/ScrollToTop/ScrollToTop";
import CouponPage from "./Pages/CouponPage/CouponPage";
import WalletPage from "./Pages/WalletPage/WalletPage";
import NewsPage from "./Pages/NewsPage/NewsPage";
import GameDetailsPage from "./Pages/GameDetailsPage/GameDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SpeedInsights />
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/SignIn"
              element={<SignIn heading="Sign in to your Account" />}
            />
            <Route
              path="/Register"
              element={<Register heading={`Create an Account`} />}
            />
            <Route path="/Store" element={<Store />}>
              <Route index element={<StoreContent />} />
              <Route path="Cart" element={<CartPage />} />
              <Route path="WishList" element={<WishlistPage />} />
              <Route path="Coupons" element={<CouponPage />} />
              <Route path="Wallet" element={<WalletPage />} />
              <Route path="News" element={<NewsPage />} />
              <Route path=":id" element={<GameDetailsPage />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
