// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Herosection/Herosection';
import Card from './components/Card/Card';
import imageholder from "./assets/imageholder.png"

function App() {
  return (
    <div >
      <Navbar/> 
      <Herosection/>
      <Card  image = {imageholder} follwer={"1000"} title={"bollywood"}/>
    </div>
  );
}

export default App;
