import React, { Component } from 'react';
import './App.css';
import Content from  './components/content'
import Header from "./components/header"
import Footer from "./components/footer"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: "home"
    }
  }

  navigate = (newPage) => {
    this.setState({currentPage: newPage.target.id});
  }
  render() {
    return (
      <div>
        <Header callbackFunction={this.navigate} />
        <Content page={this.state.currentPage}/>
        <Footer />
      </div>
    );
  }
}

export default App;
