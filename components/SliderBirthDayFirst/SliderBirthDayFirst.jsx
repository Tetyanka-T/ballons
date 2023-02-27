import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, EffectFlip, Navigation } from "swiper";
import Image from "next/image";

import photo1 from "../../public/birthDayFirst/1.jpg";
import photo2 from "../../public/birthDayFirst/2.jpg";
import photo3 from "../../public/birthDayFirst/3.jpg";

import photo5 from "../../public/birthDayFirst/5.jpg";
import photo6 from "../../public/birthDayFirst/6.jpg";
import photo7 from "../../public/birthDayFirst/7.jpg";
import photo8 from "../../public/birthDayFirst/8.jpg";
import photo9 from "../../public/birthDayFirst/9.jpg";
import photo10 from "../../public/birthDayFirst/10.jpg";
import photo11 from "../../public/birthDayFirst/11.jpg";
import photo12 from "../../public/birthDayFirst/horizontal/1.jpg";
import photo13 from "../../public/birthDayFirst/horizontal/2.jpg";
import photo14 from "../../public/birthDayFirst/horizontal/3.jpg";
import photo15 from "../../public/birthDayFirst/horizontal/4.jpg";
import photo16 from "../../public/birthDayFirst/horizontal/5.jpg";
import photo17 from "../../public/birthDayFirst/horizontal/6.jpg";
import photo18 from "../../public/birthDayFirst/horizontal/7.jpg";
import photo19 from "../../public/birthDayFirst/horizontal/8.jpg";

import s from "./SliderBirthDayFirst.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

const SliderBirthDayFirst = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#FFA500",
          "--swiper-navigation-color": "#FFA500",
        }}
      >
        <SwiperSlide className={s.image_container}>
          <Image src={photo1} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo2} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo3} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo5} alt="" width={280} height={250} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo6} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo7} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo8} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo9} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo10} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo11} alt="" width={280} height={200} />
        </SwiperSlide>
        {/* </Swiper>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        style={{
          "--swiper-pagination-color": "#FFA500",
          "--swiper-navigation-color": "#FFA500",
        }}
        className={s.swiper}
      > */}
        <SwiperSlide className={s.image_container}>
          <Image src={photo12} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo13} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo14} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo15} alt="" width={280} height={200} />
        </SwiperSlide>

        <SwiperSlide className={s.image_container}>
          <Image src={photo16} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo17} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo18} alt="" width={280} height={200} />
        </SwiperSlide>
        <SwiperSlide className={s.image_container}>
          <Image src={photo19} alt="" width={280} height={200} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderBirthDayFirst;
