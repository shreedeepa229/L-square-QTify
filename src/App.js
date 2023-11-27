// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Herosection/Herosection';
import Card from './components/Card/Card';
import imageholder from "./assets/imageholder.png"

import { useEffect } from 'react';
import Carousel from './components/Carousel/index';
import { useState } from 'react';
import axios from "axios";
import styles from './App.css';
import Section from './components/Section/index';
import FilterSection from './components/FilterSection';


const ENDPOINT = "https://qtify-backend-labs.crio.do"



function App() {
  const[topAlbum,settopAlbum] = useState([])
  const[newAlbum,setnewAlbum] = useState([])
  const[songs,setSongs] = useState([])
  const[filteredSongs,setFilteredSongs] = useState([])
  const[genres,setGenres] = useState([])


useEffect(()=> {
axios.get(`${ENDPOINT}/albums/top`) 
.then(({data} ) =>{
  settopAlbum(data)
})
.catch((error) =>{
  console.log(error)}
)

axios.get(`${ENDPOINT}/albums/new`) 
.then(({data} ) =>{
  setnewAlbum(data)
})
.catch((error) =>{
  console.log(error)}
)

axios.get(`${ENDPOINT}/songs`) 
.then(({data} ) =>{
  setSongs(data)
  setFilteredSongs(data)
})
.catch((error) =>{
  console.log(error)}
)

axios.get(`${ENDPOINT}/genres`) 
.then((res ) =>{
  setGenres([{"key":"all","label":"All"},...res.data.data])
})
.catch((error) =>{
  console.log(error)}
)
},[])



  return ( 
    <div >
      <Navbar/> 
      <Herosection/>
      <Section navId='ta' title="Top Album" data={topAlbum}/>
      <Section navId="na" title="New Album" data={newAlbum}/>
      <FilterSection title="Songs" data={filteredSongs} filters={genres}
      executeFilter  = {(genre)=>{
if(genre==="all"){
  setFilteredSongs(songs)
}else{
  const filteredSongs = songs.filter(ele=>ele.genre.key === genre)
  setFilteredSongs(filteredSongs)
}
      }


      }/>
    </div>
  );
}

export default App;
