import React, { Component } from 'react';
import dash from '../img/dash.png'
import logo from '../img/logo.png'
import space from '../img/space-min.jpg'

class Header extends Component {
  constructor(props){
    super(props)
 }

  render() {
    return (
        <div>
       <section className="wix-page-header" style={{backgroundImage: "url(" + space + ")"}}>
           <header>
                <img src={logo} className="main-logo"/>
            </header>
            <div className="header-title-container">
             
            
            <h1 className="top-title">Mobile Open Source</h1>
            <h2 className="project-tagline">Bringing Native Back to React Native</h2>
        </div>
        </section>
         
        </div>
      
    );
  }
}

export default Header;
