import Card from '../Card/Card';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css'
import {ReactComponent as LeftNavigation} from "../LeftArrow.svg"
import {ReactComponent as RightNavigation} from '../RightArrow.svg'



export default ({navId,data})=>{
    return <div className='carousel-container' >
        <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={30}
        // navigation={true}
        navigation={{nextEl: `.arrow-left-${navId}` , prevEl: `.arrow-right-${navId}`}}
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

      <div className={`arrow-left-${navId} arrow-left arrow`}><LeftNavigation/></div>
      <div className={`arrow-right-${navId} arrow-right arrow`}><RightNavigation/></div>
    </div>
}
