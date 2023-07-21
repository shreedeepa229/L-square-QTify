// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Herosection/Herosection';
import Card from './components/Card/Card';
import imageholder from "./assets/imageholder.png"
import Grid from './components/Grid/Grid';
import { useEffect } from 'react';



function App() {

  useEffect(()=>{

  })



  return (
    <div >
      <Navbar/> 
      <Herosection/>
      {/* <Card  image = {imageholder} follwer={"1000"} title={"bollywood"}/> */}
      <Grid TopRight="Top Album"/>
    </div>
  );
}

export default App;
