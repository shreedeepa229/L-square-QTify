import React from 'react'
import  './card.css'
import { PlayCircleFilledTwoTone } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';


const Card = ({isalbum,imgSrc,follwersCount,lable,songcount,likesCount}) => {
  console.log(songcount===null)
  return (
    <>
    {
    (likesCount) ? <div className="card-wrapper">
    <div className='card'>
      <div className='card-img-frame'> 
      <img src={imgSrc} alt="songcover" loading="lazy" className='card-img'/>
      </div>
     
      <div className='card-content'>
        {
(!likesCount)  ? 
<span className='card-content-pill'>
        {follwersCount} follwers      
            </span> 
        :
        <span className='card-content-pill'>
        {likesCount} likes      
            </span> 
        
        }
          
       
       
      </div>
    </div>

    
      <p className='card-lable'> {lable}</p>
     
    
  </div> : 
 <Tooltip title={`${songcount} songs`} arrow placement='top'>
 <div className="card-wrapper">
      <div className='card'>
        <div className='card-img-frame'> 
        <img src={imgSrc} alt="songcover" loading="lazy" className='card-img'/>
        </div>
       
        <div className='card-content'>
          {
(!likesCount)  ? 
<span className='card-content-pill'>
          {follwersCount} follwers      
              </span> 
          :
          <span className='card-content-pill'>
          {likesCount} likes      
              </span> 
          
          }
            
         
         
        </div>
      </div>

      
        <p className='card-lable'> {lable}</p>
       
      
    </div>
</Tooltip>
    }
    </>
    //   {/* {paren componet incudes card + title} */}
   
   
  );
}

export default Card
