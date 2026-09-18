import cls from "./Slider.module.css";
import slider from "../../../../assets/slider.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Стили Swiper
import "swiper/css";
import "swiper/css/navigation";
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
        breakpoints={{
          768: {
            slidesPerView: 1, // Планшеты (>= 768px и < 1024px)
          },
          1024: {
            slidesPerView: 1, // Ноутбуки (>= 1024px и < 1200px)
          },
          1200: {
            slidesPerView: 1, // Большие экраны (>= 1200px)
          },
        }}
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
