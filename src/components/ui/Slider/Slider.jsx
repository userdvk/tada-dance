import cls from "./Slider.module.css";
import slider from "../../../assets/slider.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Стили Swiper
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export function Slider() {
  return (
    <div className={cls.wrapper}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{
          paddingBottom: "25px",
        }}
      >
        <SwiperSlide>
          <img src={slider} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
