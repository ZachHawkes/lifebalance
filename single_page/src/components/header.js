import React, { Component } from 'react';
import logo from  "../Images/logo.JPG";

export default class Header extends Component {

  switchPages(newPage){
    this.props.navigate(newPage);``
  }
  render(){

    return(
      <div>
        <div className="upperHead">
              <div>
              {/* <a href="index.php"> */}
              <img src={logo} alt="logo" id="logo"></img>
              {/* </a> */}
              </div>
          </div>
          <div className="linkbar">
          <ul className="links">
              <a href="" className="navlinks"><li>Home</li></a>    
              <a href="" className="navlinks"><li>About Me</li></a>
              <a href="" className="navlinks"><li>About the Work</li></a>
              <a href="" className="navlinks"><li>Services</li></a>    
              <a href="" className="navlinks"><li>Testimonials</li></a>
              <a href="" className="navlinks"><li>Contact</li></a>    
          </ul>
          </div> 
      </div>
    );
  }
}