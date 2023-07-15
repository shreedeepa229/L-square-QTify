import React from 'react'
import styles from './Card.module.css'



const Card = ({image,follwer,title}) => {
  return (
    //   {/* {parent componet incudes card + title} */}
    <div className={styles.parent}>
      <div className={styles.card}>
        <img src={image} alt="songcover" loading='lazyloading'/>
        <div className={styles.follwerslikes}>
          <p>{follwer}</p>
        </div>
      </div>

      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
}

export default Card
