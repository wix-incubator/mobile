import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import './new.css';

import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

import projects from './projects.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Projects projectsData={projects}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
