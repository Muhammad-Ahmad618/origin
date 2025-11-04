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
    <div className="text-center py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-[1.5rem] font-bold pb-14 text-left">
          Categories
        </h2>
        <div className="text-[#efeeee71] text-sm text-end flex items-center text-[2rem] gap-x-2">
          <span className="custom-cat-prev p-2 rounded-full bg-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20">
            <FaAngleLeft className="text-white text-xs" />
          </span>
          <span className="custom-cat-next p-2 rounded-full bg-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20">
            <FaAngleRight className="text-white text-xs" />
          </span>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
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
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {data.map((category, index) => (
          <SwiperSlide
            key={index}
            className="max-w-[15rem] sm:max-w-[18rem] md:max-w-[20rem]"
          >
            <div className="group relative cursor-pointer aspect-[4/5]">
              <img
                src={category.image}
                alt="categoryImage"
                className="w-full h-full"
              />
              <div className=" bg-white/5 backdrop-blur-md w-full p-3 rounded-lg my-2">
                <h4 className="text-xs sm:text-sm lg:text-base text-white font-medium">
                  {category.text}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
