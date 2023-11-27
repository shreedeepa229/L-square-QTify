import Carousel from "../Carousel/index";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useEffect, useState } from "react";
import "./filter.css"

export default ({title,data,filters,executeFilter}) => {
   const [selectedTab,setSelectedTab] = useState(0)

  return (
    <div className="section">
      <div className="section-header">
      <h1 className="title">{title}</h1>
      </div>
        <Tabs value={selectedTab}
        onChange = {(e,value)=>{
            setSelectedTab(value)
            executeFilter(filters[value].key)
        }}
        TabIndicatorProps={{
            style :{
                backgroundColor:'var(--color-primary)'
            }
        }

        }
        >{
            filters.map(ele=>
<Tab className="tab" key={ele.key} label={ele.label}/>
            )
        }

        </Tabs>
         <Carousel data={data}/> 
     </div>
  )
   
};