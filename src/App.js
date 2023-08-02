import React from "react";
import "./App.css";
import { action, originals } from './urls'
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Rowpost from "./Components/RowPost/Rowpost";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url={originals} title= 'Netflix Originals' />
    <Rowpost url={action} title= 'Action' isSmall />
    <Rowpost url={action} title= 'Action' isSmall />
    </div>
  );
}

export default App;

 