// this is where the main content will be?
// maybe some individual components.
import React, { Component } from "react"
import Home from "./home"
import About from "./about"
// import About from "./components/about"

export default class Content extends Component {
  constructor (props){
    super (props);
    this.state = {
      currentPage: "home"
    }
  }

  componentDidUpdate(){
    this.setState( {currentPage: this.props.currentPage})
  }

  render(){
    if(this.state.currentPage === "home"){
      return(
        <div>
          <Home />
        </div>
      );
    } else if (this.state.currentPage === "about"){
      return(
        <div>
          <About />
        </div>
      );
    }
  }
}

/*
*Each component is a page in this main component. Header component will pass the prop down which will indicate which component
* or page will be shown inside this component. When the prop changes this will trigger the rerender of the component showing
* the user what they are meant to see. 
*/