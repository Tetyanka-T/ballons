import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  EffectFlip,
  Navigation,
  Autoplay,
} from "swiper";
import Image from "next/image";
import imgs from "./birthDayBoysLinks.json";
import s from "../SliderBirthDayFirst/SliderBirthDayFirst.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

const SliderBirthDayBoys = () => {
  return (
    <div className={s.slider}>
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
          {imgs.map((img) => (
            <SwiperSlide key={img.id}>
              <Image
                src={img.src}
                alt="composition of balloons"
                width={280}
                height={200}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <Image
              src="https://i.ibb.co/b772fRW/10.jpg"
              alt="composition of balloons"
              width={280}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://i.ibb.co/qpjbZsH/7a.jpg"
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
          //   centeredSlides={true}
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
          {imgs.map((img) => (
            <SwiperSlide key={img.id}>
              <Image
                src={img.src}
                alt="composition of balloons"
                width={280}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderBirthDayBoys;
