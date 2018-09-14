import React, { Component } from 'react';

import './App.css';
let defaultStyle = {color:'white'};

class Aggregate extends Component {
  render(){
    return(
      <div style={{...defaultStyle,width:'40%', display:'inline-block'}}>{/*using object spread*/}
        <h2 style={defaultStyle}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return(
      <div style={defaultStyle}>
      <img/>
      <input type="text"></input>
      
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width:'25%', display:'inline-block'}}>
        <img/>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1 style={{...defaultStyle,font:'50px'}}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}


export default App;
