import "./App.css";
import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./Components/utility/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const LandingPage = lazy(() => import("./Pages/landingPage"));
const SignIn = lazy(() => import("./Pages/authPage"));
const Register = lazy(() => import("./Pages/authPage"));
const Store = lazy(() => import("./Pages/StorePage/Store"));
const CartPage = lazy(() => import("./Pages/cartPage"));
const WishlistPage = lazy(() => import("./Pages/wishlistPage"));
const SettingPage = lazy(() => import("./Pages/settingPage"));
const StoreContent = lazy(() => import("./Pages/StorePage/StoreContent"));
const CouponPage = lazy(() => import("./Pages/couponPage"));
const WalletPage = lazy(() => import("./Pages/walletPage"));
const NewsPage = lazy(() => import("./Pages/newsPage"));
const GameDetailsPage = lazy(
  () => import("./Pages/GameDetailsPage/GameDetailsPage"),
);
const LibraryPage = lazy(() => import("./Pages/libraryPage"));

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
