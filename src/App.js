import React from 'react';
import './App.css';
import add from './elements/add';
import initialEntries from './info/initial-entries';

//creating the header for the main app page. adding in nav bar and links appropriate//
class App extends React.Component{

  render(){
    return (
      <header>
        <div class="header">
        <h1>Cooking Corner</h1>
        <img src="cook.png" />
       <nav id="bar">
        <ul>
            <li><a href= "/~pth2/wd1/fixtures.html"> Recipes </a></li>
            <li><a href= "/~pth2/wd1/clubinfo.html"> Add New</a></li>
            <li><a href= "shoplist.js"> Shopping List </a></li>
        </ul>    
      </nav>
      </div>
        </header>
    );
  }
}

export default App;