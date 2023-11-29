import React from 'react'
import  './card.css'
import { PlayCircleFilledTwoTone } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';


const Card = ({imgSrc,follwersCount,lable,songcount}) => {
  console.log(songcount)
  return (
    //   {/* {paren componet incudes card + title} */}
    <Tooltip title={songcount+" songs"} arrow placement='top'>
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
</Tooltip>
   
  );
}

export default Card
