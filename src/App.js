import { computeHeadingLevel } from '@testing-library/dom';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from "./components/User";

class App extends Component{
  render()
  {
    const test = 34;
    const isAught = true;

    return (
      <div className="container">
        <Navbar title = "User App"/>
        <hr/>
        <User
         name = "Fatih"
         department = "Bilişim"
         salary = "150"
         />
        <User 
        name = "Oğuz"
        department = "Servis"
        salary = "600"
        />
      </div>
    );
  }
}

export default App;
