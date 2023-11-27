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


const ENDPOINT = "https://qtify-backend-labs.crio.do"



function App() {
  const[topAlbum,settopAlbum] = useState([])
  const[newAlbum,setnewAlbum] = useState([])
  const[allsongsData,setallsongsData] = useState([])


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
},[])



  return (
    <div >
      <Navbar/> 
      <Herosection/>
      <Section title="Top Album" data={topAlbum}/>
      <Section title="New Album" data={newAlbum}/>
    </div>
  );
}

export default App;
