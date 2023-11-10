import styles from './Card.module.scss';
import { motion } from "framer-motion"

import {Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/scrollbar';

import night from './assets/nightstand.png';
import bad from './assets/bad.png';



export const Slider = () => {
    
    const sliderSettings = {
      440: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 50,
      },
    };


    return(
        <>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={4.5}
                // centeredSlides={true}
                // loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}              
                breakpoints={sliderSettings}
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
            >
                <SwiperSlide>
                    <div className={styles.item_photo}>
                        <img src={night} alt="slider-item" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.item_photo}>
                        <img src={bad} alt="slider-item" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.item_photo}>
                        <img src={night} alt="slider-item" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>    
                    <div className={styles.item_photo}>
                        <img src={bad} alt="slider-item" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.item_photo}>
                        <img src={night} alt="slider-item" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.item_photo}>
                        <img src={bad} alt="slider-item" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.item_photo}>
                        <img src={night} alt="slider-item" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.item_photo}>
                        <img src={bad} alt="slider-item" />
                    </div>
                </SwiperSlide>
            </Swiper>  
            
        </>
    );
}


export default function PhotoAndVideo(){
    return(
        <>
            <div className={styles.PhotoVideo}>
                <div className={styles.container}>
                    <div className={styles.PhotoVideo_titels}>
                        <h2> Фотографии и видео </h2>
                    </div>
                    <div className={styles.PhotoVideo_slider}>
                        <Slider />
                    </div>
                    <div className={styles.PhotoVideo_text}>
                        <p>
                            Представляем вашему вниманию спальный гарнитур «Натали»
                            Он выполнен в классическом стиле с элементами аристократии и роскоши.
                            В комплект входят: кровать, прикроватные тумбы, несколько вариантов шкафов и комод
                            с зеркалом. Обратите внимание, все модули комплекта вы можете приобрести по отдельности.
                            Коллекция «Натали» может быть выполнена в двух цветах: в темном оттенке «Орех», 
                            а также в более светлом решении «Клен Ясень Бежевый» Рекомендуем Вам обязательно 
                            посмотреть видео спальни, гостиной и прихожей из коллекции «Натали». 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

{/* <div className={styles.wrap}>
<div className={styles.sliderLine}>
    <div className={styles.item_photo}>
        <img src={night} alt="slider-item" />
    </div>
    <div className={styles.item_video}>
        <img src={bad} alt="slider-item" />
    </div>
    <div className={styles.item_photo}>
        <img src={night} alt="slider-item" />
    </div>
    <div className={styles.item_photo}>
        <img src={bad} alt="slider-item" />
    </div>
    <div className={styles.item_photo}>
        <img src={night} alt="slider-item" />
    </div>
    <div className={styles.item_photo}>
        <img src={bad} alt="slider-item" />
    </div>
    <div className={styles.item_photo}>
        <img src={night} alt="slider-item" />
    </div>
</div>
</div> */}