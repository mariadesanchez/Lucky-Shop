'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css';

interface Props {
  images: string[]; // Aquí se asume que las imágenes son URLs completas de Cloudinary
  title: string;
  className?: string;
}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        pagination
        autoplay={{
          delay: 2500
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((imageUrl) => (
          <SwiperSlide key={imageUrl}>
            <img
              src={imageUrl}
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
