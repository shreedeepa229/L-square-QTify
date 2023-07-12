import {React,useState} from 'react'
import styles from './Search.module.css'
import Searchicon from "../../assets/Searchicon.png"


const Search = ({placeholder}) => {
    const [val,setval] = useState("")

function submit(e){
    e.preventDefault()
}

function handlechange(e){
    setval(e.target.value)
}



  return (
    <form className={styles.parent} onSubmit={submit}>
     <input type="text" className={styles.search} placeholder={placeholder} required value={val} onChange={handlechange}/>
     <button type="submit" className={styles.searchbutton}>
        <img src={Searchicon} alt="searchicon" />
     </button>
    </form>
  )
}

export default Search
