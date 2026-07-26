import { useNavigate } from "react-router-dom";
import Navbar from "../Components/custom/Navbar";
import Category from "../Components/Sliders/CategoriesSlider";
import VideoGamesNews from "../Components/VideoGameNews/VideoGamesNews";
import PopularGames from "../Components/popularGames/popularGames";
import Footer from "../Components/custom/Footer";
import HeroSectionSlider from "../Components/Sliders/HeroSectionSlider/HeroSectionSlider";
import {
  FaMoneyBill,
  FaDownload,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa6";
import { MdAccessAlarm } from "react-icons/md";
import { IoGameController } from "react-icons/io5";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/sign-In");
  };

  const SellingPoints = [
    {
      heading: "Competitive Prices",
      icon: <FaMoneyBill />,
      body: "Get your favorite games at unbeatable prices with regular discounts and exclusive member deals.",
      accent: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/20",
    },
    {
      heading: "Fast Downloads",
      icon: <FaDownload />,
      body: "Enjoy instant access with our high-speed CDN servers delivering games lightning fast, globally.",
      accent: "from-blue-500 to-cyan-600",
      glow: "shadow-blue-500/20",
    },
    {
      heading: "Early Access",
      icon: <MdAccessAlarm />,
      body: "Be the first to experience exclusive titles and early access releases before anyone else.",
      accent: "from-violet-500 to-purple-600",
      glow: "shadow-violet-500/20",
    },
    {
      heading: "Rewards",
      icon: <FaTrophy />,
      body: "Earn as you play! Collect loyalty points with every purchase and redeem for exclusive rewards.",
      accent: "from-amber-500 to-orange-600",
      glow: "shadow-amber-500/20",
    },
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "linear-gradient(180deg, #0d0d0f 0%, #111113 100%)",
      }}
    >
      <Navbar handleSignIn={handleSignIn} />

      {/* HERO SECTION */}
      <section className="relative pt-[4.5rem]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[120px]" />
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 pt-8 pb-4 relative z-10">
          <HeroSectionSlider />
        </div>
      </section>

      {/* FEATURED GAMES */}
      <section className="relative py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-700/8 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 relative z-10">
          <div className="flex items-end justify-between mb-10">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-widest">
                  <IoGameController className="text-base" />
                  Top Picks
                </span>
              </div>
              <h2 className="text-white text-[2rem] sm:text-[2.6rem] font-black leading-tight">
                Featured{" "}
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                  Games
                </span>
              </h2>
              <div className="h-0.5 w-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            </div>
            <button
              onClick={() => navigate("/store")}
              className="hidden sm:flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 group font-medium"
            >
              View All
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <PopularGames />

          <div className="flex sm:hidden justify-center mt-6">
            <button
              onClick={() => navigate("/store")}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 group font-medium border border-white/10 px-5 py-2.5 rounded-full hover:border-purple-500/50"
            >
              View All Games
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-6">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">
          <Category />
        </div>
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="py-10">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">
          <div className="relative h-[55vh] min-h-[340px] rounded-2xl w-full overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-right transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7u0o3i84kn2M0zywawe5fA/1418252c9f25b687b9054e8dc8683e66/Ubidotcom-FullBleed_Ubisoft__AC-Shadows_Dec24_1920x680_desk_no-logo.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="relative flex w-full h-full items-center px-6 sm:px-10 xl:px-16">
              <div className="text-white max-w-[32rem] w-full space-y-4">
                <h1 className="text-[1.8rem] sm:text-[2.4rem] font-black leading-tight">
                  Assassin&apos;s Creed
                  <br />
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Shadows
                  </span>
                </h1>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-[25rem]">
                  Secure your copy today and enjoy an exclusive pre-order
                  discount. Be the first to experience feudal Japan like never
                  before.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-gray-400 line-through text-sm">
                    $79.99
                  </span>
                  <span className="text-2xl font-black text-white">$49.99</span>
                  <span className="bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold px-2 py-0.5 rounded-md">
                    -38%
                  </span>
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="py-2.5 px-6 cursor-pointer bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-red-500/30">
                    Pre-order Now
                  </button>
                  <button className="py-2.5 px-6 cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-medium text-sm hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-purple-800/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 relative z-10">
          <div className="text-center mb-14 space-y-3">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">
              Our Advantages
            </span>
            <h2 className="text-white text-[2rem] sm:text-[2.6rem] font-black">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Origin
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-[42rem] mx-auto leading-relaxed">
              From the latest AAA titles to hidden indie gems — an unbeatable
              selection with premium service every step of the way.
            </p>
            <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {SellingPoints.map((data, index) => (
              <div
                key={index}
                className={`relative group p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-5 cursor-default hover:-translate-y-1 transition-all duration-300 shadow-lg ${data.glow}`}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-1/2 rounded-full bg-gradient-to-r ${data.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <span
                  className={`text-[1.6rem] text-white w-[3.5rem] h-[3.5rem] flex items-center justify-center bg-gradient-to-br ${data.accent} rounded-2xl shadow-lg`}
                >
                  {data.icon}
                </span>
                <h3 className="text-white text-[1.1rem] font-bold">
                  {data.heading}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {data.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-10">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex items-end justify-between mb-2">
            <div className="space-y-2">
              <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">
                Stay Updated
              </span>
              <h2 className="text-white text-[2rem] sm:text-[2.4rem] font-black">
                Latest{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  News
                </span>
              </h2>
              <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            </div>
          </div>
          <VideoGamesNews limit={10} />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-10 pb-20">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">
          <div
            className="relative rounded-2xl overflow-hidden px-8 sm:px-14 py-14 flex flex-col lg:flex-row items-center justify-between gap-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(109,40,217,0.25) 0%, rgba(37,99,235,0.15) 50%, rgba(109,40,217,0.1) 100%)",
              border: "1px solid rgba(139,92,246,0.2)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-purple-600/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 right-10 w-40 h-40 bg-blue-600/15 rounded-full blur-[60px]" />
            </div>

            <div className="relative z-10 space-y-5 lg:max-w-[55%] w-full text-center lg:text-start">
              <div className="space-y-2">
                <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">
                  Newsletter
                </span>
                <h2 className="text-[1.7rem] xl:text-[2.2rem] font-black text-white leading-tight">
                  Level Up Your{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Inbox
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Subscribe for exclusive game deals, early access notifications,
                and exciting gaming updates delivered straight to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-[32rem] mx-auto lg:mx-0">
                <input
                  type="email"
                  name="email"
                  className="flex-1 py-3 px-5 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  placeholder="Enter your email address"
                />
                <button className="py-3 px-7 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-gray-600 text-xs">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>

            <div className="relative z-10 hidden lg:block max-w-[22rem] w-full">
              <img
                src="/Spiderman2.webp"
                alt="spiderman"
                className="relative w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
