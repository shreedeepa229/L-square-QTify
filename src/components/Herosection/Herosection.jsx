import React from 'react'
import styles from './Herosection.module.css'
import HeroImage from '../HeroImage/HeroImage'
import HeroText from '../HeroText/HeroText'


const Herosection = () => {
  return (
    <div className={styles.heroparent}>
        {/* <div>hi</div> */}
      
       <HeroText/>  
       <HeroImage/>
    </div>
  )
}

export default Herosection
