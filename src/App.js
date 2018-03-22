import React, {Component} from 'react';
import './App.css';
import add from './elements/add';




//creating the header for the main app page. adding in nav bar and links appropriate//
class App extends Component {
  
  render(){
    return (
      <header>
        <div class="header">
        <h1>Cooking Corner</h1>
        <img src="cook.png" />
       <nav id="bar">
        <ul>
            <li><a href= "./info/initial-entries.js"> Recipes </a></li>
            <li><a href= "./elements/add.js"> Add New</a></li>
            <li><a href= "shoplist.js"> Shopping List </a></li>
        </ul>    
      </nav>
      </div>
      
        </header>
    );
  }
}

export default App;