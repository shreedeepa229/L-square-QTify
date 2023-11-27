import { Tabs,Tab } from '@mui/material'
import React from 'react'

const Filter = ({filters,selectedFilterIndex,setFilterIndex}) => {

    const handlechange = (event,value) =>{
        setFilterIndex(value)
    }
  return (
    <div>
      <Tabs
      value={selectedFilterIndex}
      TabIndicatorProps={
        {
            style:{
                backgroundColor:"green"
            }
        }
      }
      onChange={handlechange}
      >
        {
            filters.map((element,index)=>{
                return <Tab label={element.label} id={index}/>
            })
        }
      </Tabs>
    </div>
  )
}

export default Filter
