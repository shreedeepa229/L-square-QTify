import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import './section.css'
 import Carousel from "../Carousel/index";
 import Tooltip from '@mui/material/Tooltip';


export default ({navId,title,data}) => {
    const[isCollapsed,setisCollapsed]=useState(false)

  return (
    <div className="section">
      <div className="section-header">
        
      <h1 className="title">{title}</h1>
      <h1 className="section-toggle-btn" onClick={()=>{
        setisCollapsed(!isCollapsed)
      }}>{isCollapsed ? 'Show All' : 'Collapse'}</h1>
      </div>
        {
          (isCollapsed) ? <Carousel navId={navId} data={data}/> : (
           
 <div className="card-container">
           {data.map(CardData => 
  
   <Card 
            key = {CardData.id} 
            imgSrc={CardData.image} 
            follwersCount={CardData.follows} 
            lable={CardData.title}
            songcount={Object.keys(CardData.songs).length}/>

            
          

           
           )}
        </div>


          )
        }
        
    </div>
  )
   
};

