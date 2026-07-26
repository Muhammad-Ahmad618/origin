import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSectionSlides from "./HeroSectionSlides";
import {
  Navigation,
  FreeMode,
  Thumbs,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function HeroSectionSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const data = [
    {
      id: 15344,
      background_image:
        "https://cdn1.epicgames.com/spt-assets/73eb5be092f44daf8f4101a19c4a21fa/ys-x-nordics-u90vy.jpg",
      name: "Ys X: Nordics",
      tagline:
        "Embark on a high-seas journey where steel clashes with destiny, and legends are born across the Nordic seas.",
      price: 59.99,
    },
    {
      id: 15345,
      background_image:
        "https://images.igdb.com/igdb/image/upload/t_720p/ar3394.webp",
      name: "Dragon Age: The Veilguard",
      tagline:
        "Gather your allies, shape your story, and confront the mysteries that lurk beyond the Veil in a world of magic and betrayal.",
      price: 39.99,
    },
    {
      id: 15346,
      background_image:
        "https://images.igdb.com/igdb/image/upload/t_720p/ar2ye7.webp",
      name: "Call of Duty: Modern Warfare",
      tagline:
        "Step into the chaos of modern warfare, where every mission tests your skill, and every decision shapes the battlefield.",
      price: 56.99,
    },
    {
      id: 15347,
      background_image:
        "https://images.igdb.com/igdb/image/upload/t_720p/ar5bh.webp",
      name: "S.T.A.L.K.E.R 2",
      tagline:
        "Enter the deadly Zone, scavenging for survival while uncovering dark secrets hidden in its radioactive heart.",
      price: 39.99,
    },
    {
      id: 15348,
      background_image:
        "https://cdn1.epicgames.com/spt-assets/d1147ce48e1046bbb84a41081bd7af81/gran-saga-1dgvp.jpg",
      name: "Gran Saga",
      tagline:
        "Unite with powerful heroes, battle colossal foes, and write your own saga in a breathtaking fantasy world.",
      price: 19.99,
    },
  ];

  return (
    <div className="space-y-3">
      {/* Main Slider */}
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={0}
        speed={900}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, EffectFade, Autoplay]}
      >
        {data.map((game, index) => (
          <SwiperSlide key={index}>
            <HeroSectionSlides game={game} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <div className="hidden sm:block">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Navigation]}
          className="hero-thumbs-swiper"
        >
          {data.map((game, index) => (
            <SwiperSlide key={index} className="hero-thumb-slide">
              <div className="relative rounded-xl overflow-hidden cursor-pointer aspect-[16/9] group">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                />
                {/* Title overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-2">
                  <span className="text-white text-[0.55rem] font-semibold line-clamp-1 leading-tight">
                    {game.name}
                  </span>
                </div>
                {/* Active indicator - handled via CSS */}
                <div className="thumb-active-indicator absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 transition-opacity duration-200" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSectionSlider;
