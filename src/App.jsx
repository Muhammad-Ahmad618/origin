import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "./Pages/landingPage";
import SignIn from "./Pages/authPage";
import Register from "./Pages/authPage";
import Store from "./Pages/StorePage/Store";
import CartPage from "./Pages/cartPage";
import WishlistPage from "./Pages/wishlistPage";
import SettingPage from "./Pages/settingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreContent from "./Pages/StorePage/StoreContent";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./Components/utility/ScrollToTop/ScrollToTop";
import CouponPage from "./Pages/couponPage";
import WalletPage from "./Pages/walletPage";
import NewsPage from "./Pages/newsPage";
import GameDetailsPage from "./Pages/GameDetailsPage/GameDetailsPage";
import LibraryPage from "./Pages/libraryPage";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 500,
        }}
      />
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
              <Route path="settings" element={<SettingPage />} />
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
