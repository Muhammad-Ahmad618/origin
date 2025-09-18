import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  FreeMode,
  Thumbs,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function HeroSectionSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

 const data = [
  {
    Image:
      "https://cdn1.epicgames.com/spt-assets/73eb5be092f44daf8f4101a19c4a21fa/ys-x-nordics-u90vy.jpg",
    label: "Ys X",
    tagline: "Embark on a high-seas journey where steel clashes with destiny, and legends are born across the Nordic seas.",
  Price:  "$ 59.99" 
  },
  {
    Image: "https://images.igdb.com/igdb/image/upload/t_720p/ar3394.webp",
    label: "Dragon Age The Veilguard",
    tagline: "Gather your allies, shape your story, and confront the mysteries that lurk beyond the Veil in a world of magic and betrayal.",
    Price: "$ 39.99"
  },
  {
    Image: "https://images.igdb.com/igdb/image/upload/t_720p/ar2ye7.webp",
    label: "Call of Duty 6",
    tagline: "Step into the chaos of modern warfare, where every mission tests your skill, and every decision shapes the battlefield.",
    Price: "$ 56.99" 
  },
  {
    Image: "https://images.igdb.com/igdb/image/upload/t_720p/ar5bh.webp",
    label: "S.T.A.L.K.E.R",
    tagline: "Enter the deadly Zone, scavenging for survival while uncovering dark secrets hidden in its radioactive heart.",
    Price: "$ 39.99" 
  },
  {
    Image:"https://cdn1.epicgames.com/spt-assets/d1147ce48e1046bbb84a41081bd7af81/gran-saga-1dgvp.jpg",
    label: "Gran Saga",
    tagline: "Unite with powerful heroes, battle colossal foes, and write your own saga in a breathtaking fantasy world.",
    Price: "$ 19.99" 
  },
];


  return (
    <div className="space-y-5">
      <Swiper
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerView={1}
        spaceBetween={0}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, EffectFade, Autoplay]}
      >
        {data.map((game, index) => (
          <SwiperSlide key={index}>
            <div
              className="aspect-[4/5] sm:aspect-[9/5] md:aspect-[11/5] lg:aspect-[12/5] bg-cover bg-center bg-no-repeat rounded-xl relative flex items-end"
              style={{ backgroundImage: `url(${game.Image})` }}
            >
              <div className="w-full h-full flex items-end bottom-0 rounded-rt-full rounded-b-xl left-0 p-10"
              style={{
                  background: `radial-gradient(ellipse 120% 100% at bottom left, 
                    rgba(0, 0, 0, 1) 20%, 
                    rgba(0, 0, 0, 0.9) 60%, 
                    rgba(0, 0, 0, 0.8) 70%, 
                    rgba(0, 0, 0, 0.7) 80%, 
                    transparent 100%)`,
                }}>
                <div className="text-white max-w-[30rem] space-y-5 sm:space-y-2 md:space-y-5 w-full">
                <h1 className="font-bold text-[1.6rem] md:text-[2rem]">
                  {game.label}
                </h1>
                <p className="text-sm md:text-base">{game.tagline}</p>
                <p className="text-base md:text-xl font-medium text-purple-400">{game.Price}</p>
                <div className="hidden sm:flex gap-x-5 my-4">
                  <button className="bg-gradient-to-r from-purple-800 via-purple-500 to-blue-600 max-w-[10rem] px-3 w-full py-2.5 rounded-md font-medium cursor-pointer hover:opacity-90">Buy Now</button>
                  <button className=" max-w-[10rem] w-full px-3 py-2.5 rounded-md font-medium bg-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20">Add to WishList</button>
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden sm:block">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs, Navigation]}
        className="thumbs-swiper"
      >
        {data.map((game, index) => (
          <SwiperSlide key={index}>
            <img src={game.Image} alt={game.label} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

export default HeroSectionSlider;
