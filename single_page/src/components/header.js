import React, { Component } from 'react';
import logo from  "../Images/logo.JPG";

export default class Header extends Component {
  constructor(props){
    super(props);
    this.switchPages = this.switchPages.bind(this);
    this.displayMobileMenu = this.displayMobileMenu.bind(this);
    this.state = {
      menuShown: false
    }
  }

  switchPages(element){
    console.log("What is this?",this.props.navigate);
    this.props.navigate(element.target.id);
  }

  displayMobileMenu(){
    console.log("clicked");
    console.log(this.state.menuShown);
    var menu = document.querySelector('.mobileLinks');
    if(!this.state.menuShown){
      this.setState({menuShown: true});
      menu.setAttribute("style", "display: inline;");
    } else {
      this.setState({menuShown: false});
      menu.setAttribute("style", "display: none;");
    }
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
              <a href="" className="navlinks" id="home" onClick={this.switchPages}><li>Home</li></a>    
              <a className="navlinks" id="about" onClick={this.switchPages}><li>About Me</li></a>
              <a href="" className="navlinks" id="work" onClick={this.switchPages}><li>About the Work</li></a>
              <a href="" className="navlinks" id="services" onClick={this.switchPages}><li>Services</li></a>    
              <a href="" className="navlinks" id="testimonials" onClick={this.switchPages}><li>Testimonials</li></a>
              <a href="" className="navlinks" id="contact" onClick={this.switchPages}><li>Contact</li></a>    
          </ul>
          <span className="mobile-menu" onClick={this.displayMobileMenu}> Menu </span>
          <ul className="mobileLinks">
              <a href="" className="navlinks" id="home" onClick={this.switchPages}><li>Home</li></a>    
              <a className="navlinks" id="about" onClick={this.switchPages}><li>About Me</li></a>
              <a href="" className="navlinks" id="work" onClick={this.switchPages}><li>About the Work</li></a>
              <a href="" className="navlinks" id="services" onClick={this.switchPages}><li>Services</li></a>    
              <a href="" className="navlinks" id="testimonials" onClick={this.switchPages}><li>Testimonials</li></a>
              <a href="" className="navlinks" id="contact" onClick={this.switchPages}><li>Contact</li></a>    
          </ul>
          </div> 
      </div>
    );
  }
}