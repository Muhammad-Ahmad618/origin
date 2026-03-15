import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";

function EpicStyleSlider({ media }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, EffectFade]}
      >
        {media?.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "video" ? (
              <video
                src={item.src}
                className="object-cover object-center rounded-lg aspect-[10/5]"
              />
            ) : (
              <img
                src={item.src}
                controls
                className="object-cover object-center rounded-lg aspect-[10/5]"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden md:block w-full">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          watchSlidesProgress={true}
          modules={[Thumbs, Navigation, Autoplay]}
          className="thumbs-swiper"
        >
          {media?.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === "video" ? (
                <video
                  src={item.src}
                  controls
                  className="object-cover object-center"
                />
              ) : (
                <img src={item.src} className="object-cover object-center" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default EpicStyleSlider;
