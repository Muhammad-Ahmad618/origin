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
    },
    {
      Image: "https://images.igdb.com/igdb/image/upload/t_720p/ar3394.webp",
      label: "Dragon Age The Veilguard",
    },
    {
      Image: "https://images.igdb.com/igdb/image/upload/t_720p/ar2ye7.webp",
      label: "Call of Duty 6",
    },
    {
      Image: "https://images.igdb.com/igdb/image/upload/t_720p/ar5bh.webp",
      label: "S.T.A.L.K.E.R",
    },
    {
      Image:"https://cdn1.epicgames.com/spt-assets/d1147ce48e1046bbb84a41081bd7af81/gran-saga-1dgvp.jpg",
      label: "Gran Saga",
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
              className="aspect-[12/5] bg-cover bg-center bg-no-repeat rounded-xl relative flex items-end p-5"
              style={{ backgroundImage: `url(${game.Image})` }}
            >
              <div className="max-w-[35vw] w-full h-[50vh] bottom-0 left-0 bg-black/70 rounded-2xl backdrop-blur-md to-transparent bg-blend-color rounded-bl-xl  p-10">
                <h1 className="text-white font-bold text-[2rem]">
                  {game.label}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
  );
}

export default HeroSectionSlider;
