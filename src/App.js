import React, { Component } from 'react';
import './App.css';



class App extends Component{
  render()
  {
    const test = 34;
    const isAught = true;

    return (
      <div className="App">
        <h4> { 1 + 1 } </h4>
        <h4> { "Salih".toUpperCase() } </h4>
        <h4>{test}</h4>

        <div>
          {
            isAught ? <p>Kullanıcı Kayıtlı</p>
            : null
          }
        </div>
      </div>
    );
  }

}

export default App;
