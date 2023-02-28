import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  EffectFlip,
  Navigation,
  Autoplay,
} from "swiper";
import Image from "next/image";
import s from "./SliderBirthDayFirst.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

const SliderBirthDayFirst = () => {
  return (
    <>
      <div className={s.swiper_mobile}>
        <Swiper
          className="mySwiper"
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
          style={{
            "--swiper-pagination-color": "#FFA500",
            "--swiper-navigation-color": "#FFA500",
          }}
        >
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/qMq74N3/2.jpg"
              alt="composition of balloons"
              border="0"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/ZXsPMc4/1.jpg"
              alt="composition of balloons"
              border="0"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/gMP1zzz/3.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/xCvyHkD/4.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/hBjsWtr/5.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/T8vw36t/6.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>

          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/m0WMqQw/8.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/GMg0DXC/9.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/L6J0x6V/10.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/mbz08vN/11.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/z7DT4QQ/4.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={s.swiper_tab}>
        <Swiper
          className="mySwiper"
          slidesPerView={3}
          effect={"coverflow"}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, EffectCoverflow]}
          style={{
            "--swiper-pagination-color": "#FFA500",
            "--swiper-navigation-color": "#FFA500",
          }}
        >
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/qMq74N3/2.jpg"
              alt="composition of balloons"
              border="0"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/ZXsPMc4/1.jpg"
              alt="composition of balloons"
              border="0"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/gMP1zzz/3.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/xCvyHkD/4.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/hBjsWtr/5.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/T8vw36t/6.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>

          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/m0WMqQw/8.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/GMg0DXC/9.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/L6J0x6V/10.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide className={s.image_container}>
            <Image
              src="https://i.ibb.co/mbz08vN/11.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderBirthDayFirst;
