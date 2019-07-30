import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Home></Home>
					<About></About>
					<Contact></Contact>
          <Projects></Projects>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
