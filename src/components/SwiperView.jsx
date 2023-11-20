// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// export default function Modal(){  
function SlideView() {
  return (
    <Swiper navigation={true} modules={[Navigation]}>  
        <SwiperSlide><img src="./img/banner01.jpg" alt="배너1" /></SwiperSlide>
        <SwiperSlide><img src="./img/banner02.jpg" alt="배너2" /></SwiperSlide>
        <SwiperSlide><img src="./img/banner03.jpg" alt="배너3" /></SwiperSlide>
        <SwiperSlide><img src="./img/banner04.jpg" alt="배너4" /></SwiperSlide>
        <SwiperSlide><img src="./img/banner05.jpg" alt="배너5" /></SwiperSlide> 
    </Swiper>
  )
}

export default SlideView;