"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper required modules
import { Autoplay, Navigation } from "swiper/modules";

// import JSX Components and Types
import { CategoryCard } from "./CategoryCard";
import { CategoryData, categoryData } from "./categoryData";

export function CategorySlider() {
  return (
    <Swiper
      loop={true}
      slidesPerView={3}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      watchSlidesProgress={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {categoryData.map((item: CategoryData) => (
        <SwiperSlide key={item.id}>
          <CategoryCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
