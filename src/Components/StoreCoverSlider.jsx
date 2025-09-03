import { useState, useEffect } from "react";

export default function StoreCoverSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      Link: "https://cdn1.epicgames.com/spt-assets/73eb5be092f44daf8f4101a19c4a21fa/ys-x-nordics-u90vy.jpg",
      label: "Ys X",
    },
    {
      Link: "https://images.igdb.com/igdb/image/upload/t_720p/ar3394.webp",
      label: "Dragon Age The Veilguard",
    },
    {
      Link: "https://images.igdb.com/igdb/image/upload/t_720p/ar2ye7.webp",
      label: "Call of Duty 6",
    },
    {
      Link: "https://images.igdb.com/igdb/image/upload/t_720p/ar5bh.webp",
      label: "S.T.A.L.K.E.R",
    },
    {
      Link: "https://cdn1.epicgames.com/spt-assets/d1147ce48e1046bbb84a41081bd7af81/gran-saga-1dgvp.jpg",
      label: "Gran Saga",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 3-second interval

    return () => clearInterval(interval); // Clear the interval when component unmounts
  });


  return (
    <div className="relative w-full h-[82vh] mx-auto overflow-hidden rounded-2xl">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="relative w-full flex-shrink-0 ">
            <img
              src={item.Link}
              alt={item.label}
              className="w-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent max-w-[50%] rounded-l-2xl flex items-center">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
