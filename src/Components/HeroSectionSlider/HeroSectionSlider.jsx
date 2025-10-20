import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSectionSlides from "../HeroSectionSlides/HeroSectionSlides";
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
      name: "Ys X",
      tagline:
        "Embark on a high-seas journey where steel clashes with destiny, and legends are born across the Nordic seas.",
      price: "$ 59.99",
    },
    { 
      id: 15345,
      background_image:
        "https://images.igdb.com/igdb/image/upload/t_720p/ar3394.webp",
      name: "Dragon Age The Veilguard",
      tagline:
        "Gather your allies, shape your story, and confront the mysteries that lurk beyond the Veil in a world of magic and betrayal.",
      price: "$ 39.99",
    },
    {  
      id: 15346,
      background_image:
        "https://images.igdb.com/igdb/image/upload/t_720p/ar2ye7.webp",
      name: "Call of Duty 6",
      tagline:
        "Step into the chaos of modern warfare, where every mission tests your skill, and every decision shapes the battlefield.",
      price: "$ 56.99",
    },
    {
      id: 15347,
      background_image:
        "https://images.igdb.com/igdb/image/upload/t_720p/ar5bh.webp",
      name: "S.T.A.L.K.E.R",
      tagline:
        "Enter the deadly Zone, scavenging for survival while uncovering dark secrets hidden in its radioactive heart.",
      price: "$ 39.99",
    },
    { 
      id: 15348,
      background_image:
        "https://cdn1.epicgames.com/spt-assets/d1147ce48e1046bbb84a41081bd7af81/gran-saga-1dgvp.jpg",
      name: "Gran Saga",
      tagline:
        "Unite with powerful heroes, battle colossal foes, and write your own saga in a breathtaking fantasy world.",
      price: "$ 19.99",
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
           <HeroSectionSlides game={game} />
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
              <img src={game.background_image} alt={game.name} className="rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSectionSlider;
