import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import './gallery.css';
import Title from '../Title/Title';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/layer.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.png';

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <div className="container" id="gallery">
      <Title title="Behind The Screen" />

      <Swiper
        modules={[Pagination, EffectCoverflow, Navigation]}
        pagination={{ clickable: true }}
        navigation
        speed={800}
        centeredSlides={true}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="gallery-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="gallery-slide">
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
