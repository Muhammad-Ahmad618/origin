import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function SlickSlider() {
  const data = [
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240835/Survival_pjvv45.png",
      text: "SURVIVAL",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240841/Horror_do8caj.png",
      text: "HORROR",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240835/Action_v57gfn.png",
      text: "ACTION",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240843/Sports_winvu3.png",
      text: "SPORTS",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240843/Adventure_m98svc.png",
      text: "ADVENTURE",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240830/Simulation_purazd.png",
      text: "SIMULATION",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240841/Open_World_d0tk0j.png",
      text: "OPEN-WORLD",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240831/Racing_lwgh5r.png",
      text: "RACING",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240834/Cooperative_pcqo9h.png",
      text: "COOPERATIVE",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240845/Strategy_pogzc1.png",
      text: "STRATEGY",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240843/Story_Rich_pqmgml.png",
      text: "STORY RICH",
    },
    {
      image:
        "https://res.cloudinary.com/ddskcinwi/image/upload/f_webp/v1754240833/Role_Playing_zml4ng.png",
      text: "ROLE PLAYING",
    },
  ];

  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-2">
          <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Browse by</span>
          <h2 className="text-white text-[2rem] font-black">Categories</h2>
          <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>
        <div className="flex items-center gap-2">
          <span
            className="custom-cat-prev w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <FaAngleLeft className="text-white text-sm" />
          </span>
          <span
            className="custom-cat-next w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <FaAngleRight className="text-white text-sm" />
          </span>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={12}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation={{
          nextEl: ".custom-cat-next",
          prevEl: ".custom-cat-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 8 },
          640: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 12 },
          1024: { slidesPerView: 4, spaceBetween: 12 },
          1280: { slidesPerView: 5, spaceBetween: 14 },
        }}
      >
        {data.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="group relative cursor-pointer aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src={category.image}
                alt={category.text}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Purple hover tint */}
              <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div
                  className="w-full py-2 px-3 rounded-lg text-center"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <h4 className="text-white text-[0.65rem] sm:text-xs font-bold tracking-wider">
                    {category.text}
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
