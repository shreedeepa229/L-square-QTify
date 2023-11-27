import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import imageholder from "../../assets/imageholder.png";
import styles from "./Grid.module.css";

// import { Filter } from "@mui/icons-material";
import Filter from "../Filter/Filter";
import Carousel from "../Carousel/Carousel";

const Grid = ({type,filtersArray,data,TopRightTitle}) => {
    const[value,setvalue] = useState(0)
    const[showAll, setshowAll] = useState(true)
    // const[filters,setfilters] = useState({key : "all" , label:"All"})
    
      console.log("this is data",data)

const handleChange=(e,value)=>{
  setvalue(value)
}


const filtersongs = (key) =>{
  const res = data.filter((element)=>element.genre.key === key)
  console.log(res)
}

  function handleshowall(){
    if(showAll){
      setshowAll(false)
    }
else{
  setshowAll(true)
}
  }



  return (
    <div className={styles.parent}>
      <div className={styles.description}>
        <h3>{TopRightTitle}</h3>
        <h3 onClick={handleshowall}>{showAll ? "Show All" : "Collapse"}</h3>
      </div>
{/* TODO :when data is empty show circular loading */}
      {/* {
        showFilters && (
            <Filter filters={filters} selectedFilterIndex={selectedFilterIndex} setFilterIndex={setFilterIndex}/>
        )
      } */}

{(data?.length===0) ? "loading" :
<div className={styles.wrapper}>
{(showAll) ? 
  <div className={styles.grid}>
       
{data?.map((element)=>{

 return (
<div key={element.id}>
<Card image={element.image} follwer={element.follows} title={element.title} />
</div>
       )

})
}
</div>  : (<Carousel data={data} renderComponent={(data)=><Card data={data} type={type}/>}/>)
 }
</div>

}
    </div>
  );
};

export default Grid;
