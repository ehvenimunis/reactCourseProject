import { computeHeadingLevel } from '@testing-library/dom';
import React, { Component } from 'react';
import './App.css';
import User from "./components/User";

class App extends Component{
  render()
  {
    const test = 34;
    const isAught = true;

    return (
      <div className="container">
        <h4 className="header">App Companent</h4>
        <hr/>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
      </div>
    );
  }
}

export default App;
