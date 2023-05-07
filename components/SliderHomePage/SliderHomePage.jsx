import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay, Navigation } from "swiper";
import Image from "next/image";
import imgs from "./sliderImgsHomePageLinks.json";
import s from "./SliderHomePage.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderHomePage = () => {
  return (
    <div className={s.swiper}>
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
            <div key={img.id} className={s.swiperSlider}>
              <SwiperSlide key={img.id}>
                <Image
                  src={img.src}
                  alt="composition of balloons"
                  width={280}
                  height={220}
                />
              </SwiperSlide>
              <div className={s.transparent}></div>
            </div>
          ))}
        </Swiper>
      </div>

      <div className={s.slider_tab}>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#FFA500",
            "--swiper-navigation-color": "#FFA500",
          }}
        >
          {imgs.map((img) => (
            <SwiperSlide key={img.id} className={s.swiperSlider}>
              <Image
                src={img.src}
                alt="composition of balloons"
                width={280}
                height={200}
              />
              <div className={s.transparent}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={s.swiper_container__desc}>
        <Swiper
          spaceBetween={10}
          // centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          style={{
            "--swiper-pagination-color": "#FFA500",
            "--swiper-navigation-color": "#FFA500",
          }}
          className="mySwiper"
        >
          {imgs.map((img) => (
            <div key={img.id} className={s.swiperSlider}>
              <SwiperSlide key={img.id}>
                <Image
                  src={img.src}
                  alt="composition of balloons"
                  width={300}
                  height={220}
                />
              </SwiperSlide>
              <div className={s.transparent}></div>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderHomePage;
