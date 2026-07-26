import { SiOrigin } from "react-icons/si";
import { FaFacebook, FaXTwitter, FaDiscord, FaTwitch } from "react-icons/fa6";
import { IoChevronForward } from "react-icons/io5";
import { useState } from "react";
import { CustomToast } from "./CustomToast";

const LinkSection = [
  {
    heading: "Explore",
    links: ["Career Opportunities", "Our Team", "About Us", "Blogs"],
  },
  {
    heading: "Discover",
    links: ["Latest Release", "Coming Soon", "Most Popular", "Best Selling"],
  },
  {
    heading: "Support",
    links: ["Customer Support", "Contact Us", "FAQs"],
  },
  {
    heading: "Connect",
    links: ["Events & Tournaments", "Community Forum"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      CustomToast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }
    CustomToast({
      title: "Subscribed Successfully",
      description: "Welcome to the Origin family! Thank you for subscribing.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-[#0b0b0f] border-t border-white/5 pt-16 pb-8 text-white">
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 pb-12">
          {/* Brand & Newsletter Block */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300 cursor-pointer w-fit group">
              <SiOrigin className="text-3xl rotate-45 text-purple-500 group-hover:rotate-[225deg] transition-transform duration-500" />
              <span className="text-2xl font-black tracking-wider">rigin</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your gateway to premium gaming experiences. Discover, collect, and play the world's best games.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider">
                Subscribe to Newsletter
              </h4>
              <div className="flex max-w-sm rounded-lg overflow-hidden border border-white/10 focus-within:border-purple-500/50 bg-white/[0.02] transition-colors duration-200">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent px-4 py-2 text-sm w-full outline-none text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase px-4 transition-colors duration-200 cursor-pointer"
                >
                  Join
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/80 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 shadow"
                >
                  <FaFacebook className="text-base" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/80 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 shadow"
                >
                  <FaXTwitter className="text-base" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/80 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 shadow"
                >
                  <FaDiscord className="text-base" />
                </a>
                <a
                  href="https://twitch.tv"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/80 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 shadow"
                >
                  <FaTwitch className="text-base" />
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {LinkSection.map((section, index) => (
              <div className="space-y-4" key={index}>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {section.heading}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-1 hover:text-purple-400 transition-colors duration-200"
                      >
                        <IoChevronForward className="text-[10px] text-purple-500" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Divider & Legal */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; 2026 Origin, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <a href="/" onClick={(e) => e.preventDefault()} className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="/" onClick={(e) => e.preventDefault()} className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="/" onClick={(e) => e.preventDefault()} className="hover:text-purple-400 transition-colors">Legal Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
