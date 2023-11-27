import Card from '../Card/Card';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css'
import {ReactComponent as LeftNavigation} from "../LeftArrow.svg"
import {ReactComponent as RightNavigation} from '../RightArrow.svg'



export default ({data})=>{
    return <div className='carousel-container' >
        <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={30}
        // navigation={true}
        navigation={{nextEl: ".arrow-left" ,prevEl: ".arrow-right"}}
        virtual
      >
        {data.map(CardData =>     
        <SwiperSlide key = {CardData.id} >
            <Card 
         
            imgSrc={CardData.image} 
            follwersCount={CardData.follows} 
            lable={CardData.title}/>
        </SwiperSlide> )}
       
      
          </Swiper>

      <button className='arrow-left arrow'><LeftNavigation/></button>
      <button className='arrow-right arrow'><RightNavigation/></button>
    </div>
}
