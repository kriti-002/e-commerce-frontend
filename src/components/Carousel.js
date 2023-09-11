import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const Carousel = ({list}) => {
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect='fade'
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {list.map((item, index)=>(
        <SwiperSlide id={index}>
          <img src={item} alt={item} style={{height: '70vh', margin: 'auto' ,width: '100%'}}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}

export default Carousel