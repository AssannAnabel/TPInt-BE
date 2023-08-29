import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='carousel-format'>
                        <img src="./public/farm-gate.jpg" className="responsive-img" alt="tractor-arando" />
                        <div>
                            <h5 className="slide-text">Comprometidos con lo que hacen el campo</h5>
                            <p>Algún contenido placeholder representativo para la primera diapositiva.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-format'>
                        <img src="./public/open-field.jpg" className="responsive-img" alt="campo-cosechado" />
                        <div>
                            <h5 className="slide-text">Asesoramiento y servicio de confianza</h5>
                            <p>Algún contenido placeholder representativo para la primera diapositiva.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-format'>
                        <img src="./public/open-field-2.jpg" className="responsive-img" alt="tranquera-de-campo" />
                        <div>
                            <h5 className="slide-text">Comprometidos con lo que hacen el campo</h5>
                            <p>Algún contenido placeholder representativo para la primera diapositiva.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Carousel;