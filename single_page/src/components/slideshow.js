import React, { Component } from "react"

export default class Slideshow extends Component {
  constructor(props){
    super(props)
    this.reviews = [
      "I love my energy sessions with Julie and I can’t believe how quickly I feel a difference.  As long as I can remember I have struggled with anxiety.  A few months ago I was waking up in the middle of the night with terrible stress and anxiety.  I couldn’t go back to sleep for hours.  After only a couple of sessions I found myself peacefully sleeping through the night! I have been blessed to have many experiences where Julie has helped me and I have felt immediate relief.  Once at work I had a twitch in my eye.  Julie was able to work on me and within a couple of minutes it was totally gone!  Julie has a great gift and my life has been blessed by my sessions with her.  K. H.",
      "I was very skeptical of working with you at first because of my lack of understanding of energy healing. After the first session I was shocked at the accuracy of my current emotions that were identified. I was much more open after that and on the path of self discovery. Working with you I learned a lot about myself that had been hidden from view, things that I didn’t even know about myself. After bringing those to light I was able to work through them. The results of that have been very rewarding, my confidence is much higher. My faith has increased immensely, my physical ailments have been reduced and some were totally eliminated. I feel like I am in control of my life and that I can make the necessary adjustments to get the results I want in my life. Thanks for your help! I am very appreciative of your sincerity in caring about me and helping me find the answers to my questions. – Dan F.",
      "When I went in for my appointment I was a little skeptical, but I was willing to try anything to help me change the way I was feeling! While at my appointment and having my negative emotions released I felt light almost like a bunch of weight had been lifted off my shoulders and I didn't feel cold anymore! Since I had my session done I can't explain the joy and happiness that has come back into our house! I feel as if we are a family again and that we can conquer anything together! I highly recommend Julie! - Amanda P."
    ]
    this.state = {
      slideText: this.reviews[0],
      slideNumber: 0 // zero indexed for coding simplicity
    }
  }

  prevSlide(){
    //i'm only temporarily empty
    if(this.state.slideNumber === 0){
      this.setState({slideText: this.reviews[this.reviews.length - 1]})
      this.setState({slideNumber: this.reviews.length - 1})
    } else {
      this.setState({slideText: this.reviews[this.state.slideNumber - 1]})
      this.setState({slideNumber: this.state.slideNumber - 1})
    }
  }

  nextSlide(){
    if(this.state.slideNumber === this.reviews.length - 1){
      this.setState({slideText: this.reviews[0]})
      this.setState({slideNumber: 0})
    } else {
      this.setState({slideText: this.reviews[this.state.slideNumber + 1]})
      this.setState({slideNumber: this.state.slideNumber + 1})
    }
  }

  render(){
    return(
      <div className="slideshow-container">
        <div className="text"> {this.state.slideText} </div>
        <a className="prev" onClick={()=> this.prevSlide()}>&#10094;</a>
        <a className="next" onClick={()=> this.nextSlide()}>&#10095;</a>
      </div>
    );
  }
}