import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import imageholder from "../../assets/imageholder.png";
import styles from "./Grid.module.css";
import axios from "axios";

const Grid = ({ TopRight }) => {
    const[topalbum,settopalbum] = useState([])
  useEffect(() => {
    const getTopAlbum = async () => {
      try {
        const getData = await axios.get(
          `https://qtify-backend-labs.crio.do/albums/top`
        );
        console.log(getData.data)
        settopalbum(getData.data)
       
      } catch (e) {
        console.log("error");
      }
    };

    getTopAlbum();
  },[]);

  return (
    <div className={styles.parent}>
      <div className={styles.description}>
        <div>{TopRight}</div>
        <div>Collapse</div>
      </div>
      <div className={styles.grid}>
      {topalbum.map((element)=>{
        return (
            <Card image={element.image} follwer={element.follows} title={element.title} />
        )
       
      })
    }
     
      </div>
    </div>
  );
};

export default Grid;
