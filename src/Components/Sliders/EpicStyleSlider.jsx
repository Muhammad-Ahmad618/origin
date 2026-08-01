import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight, MdPlayArrow } from "react-icons/md";

function EpicStyleSlider({ media }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const progressRef = useRef(null);

  return (
    <div className="epic-slider space-y-4">
      <style>{`
        .epic-slider .swiper-slide-thumb-active .thumb-frame {
          border-color: rgba(192, 132, 252, 0.8);
          opacity: 1;
        }
        .epic-slider .thumb-frame {
          opacity: 0.5;
          transition: opacity 0.25s ease, border-color 0.25s ease;
        }
        .epic-slider .thumb-frame:hover {
          opacity: 0.85;
        }
      `}</style>

      {/* Main slide */}
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-purple-950/40">
        <Swiper
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={0}
          speed={800}
          loop
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onAutoplayTimeLeft={(swiper, timeLeft, progress) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${1 - progress})`;
            }
          }}
          modules={[Thumbs, EffectFade, Autoplay, Navigation]}
        >
          {media?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[10/5] w-full">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    muted
                    playsInline
                    className="h-full w-full rounded-2xl object-cover object-center"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt=""
                    className="h-full w-full rounded-2xl object-cover object-center"
                  />
                )}
                {/* Bottom scrim for legibility of any future overlay controls */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-2xl bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav arrows */}
        <button
          ref={prevRef}
          type="button"
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100 hover:bg-purple-600/60"
        >
          <MdChevronLeft className="text-2xl" />
        </button>
        <button
          ref={nextRef}
          type="button"
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100 hover:bg-purple-600/60"
        >
          <MdChevronRight className="text-2xl" />
        </button>

        {/* Autoplay progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
          <div
            ref={progressRef}
            className="h-full w-full origin-left bg-gradient-to-r from-purple-500 to-fuchsia-400"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hidden md:block w-full">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={5}
          watchSlidesProgress
          modules={[Thumbs, Navigation]}
          className="thumbs-swiper"
        >
          {media?.map((item, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <div className="thumb-frame relative overflow-hidden rounded-lg border-2 border-transparent">
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      muted
                      className="aspect-video w-full object-cover object-center"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30">
                      <MdPlayArrow className="text-xl text-white" />
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt=""
                    className="aspect-video w-full object-cover object-center"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default EpicStyleSlider;
