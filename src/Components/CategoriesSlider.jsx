import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SlickSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <h2 className="text-white text-[1.5rem] font-bold pb-14 text-left">
        Categories
      </h2>
      <Slider {...settings}>
        {data.map((category, index) => (
          <div
            key={index}
            className="group relative max-w-[10rem] lg:max-w-[14rem]  w-full cursor-pointer overflow-hidden"
          >
            <img
              src={category.image}
              alt="categoryImage"
              className="transition-all duration-150 group-hover:opacity-70 "
            />
            <div className="absolute bottom-0 md:bottom-1 bg-black w-full p-3 rounded-b-lg transform translate-y-80 transition-transform duration-500 group-hover:translate-y-0">
              <h4 className="text-xs sm:text-sm lg:text-base text-white font-medium">
                {category.text}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
