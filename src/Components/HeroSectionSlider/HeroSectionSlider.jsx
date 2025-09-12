import { Swiper, SwiperSlide } from "swiper/react"
import { Parallax, Navigation, FreeMode, Thumbs, EffectFade } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function HeroSectionSlider() {

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

  return (
    <Swiper
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    thumbs = {{swiper: thumbsSwiper}}
    modules={[FreeMode, Navigation, Thumbs]}
    >
    <SwiperSlide>


    </SwiperSlide>

    </Swiper>
  )
}

export default HeroSectionSlider
