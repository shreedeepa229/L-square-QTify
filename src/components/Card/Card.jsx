import React from 'react'
import  './card.css'
import { PlayCircleFilledTwoTone } from '@mui/icons-material';



const Card = ({imgSrc,follwersCount,lable}) => {
  return (
    //   {/* {parent componet incudes card + title} */}
    <div className="card-wrapper">
      <div className='card'>
        <div className='card-img-frame'> 
        <img src={imgSrc} alt="songcover" loading="lazy" className='card-img'/>
        </div>
       
        <div className='card-content'>
          <span className='card-content-pill'>
          {follwersCount}follwers
          </span>
         
        </div>
      </div>

      
        <p className='card-lable'> {lable}</p>
       
      
    </div>
  );
}

export default Card
