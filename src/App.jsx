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
import LibraryPage from "./Screens/LibraryPage/LibraryPage";

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
              path="/sign-in"
              element={<SignIn heading="Sign in to your Account" />}
            />
            <Route
              path="/register"
              element={<Register heading={`Create an Account`} />}
            />
            <Route path="/store" element={<Store />}>
              <Route index element={<StoreContent />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="wishList" element={<WishlistPage />} />
              <Route path="coupons" element={<CouponPage />} />
              <Route path="wallet" element={<WalletPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="library" element={<LibraryPage />} />
              <Route path=":id" element={<GameDetailsPage />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
