import React, {Component} from "react"
import Slideshow from "./slideshow";


export default class Home extends Component {
  render(){
    return(
    <div className="content">
        <div className="slideshow">
            <div className="vidcontainer">
            <video width="750px" className="centerVideo" preload="auto" controls>
                <source src="Videos/Energy Analysis.mp4" />
            </video>
            </div>
        </div>
        <div className="secondContent">
            <div className="mainabout">
                <b>What is Energy Medicine</b>
                <p>
                    Everything is made of energy.  Our bodies are made of energy. Even our emotions are made of energy.  And that energy can be measured by science. Difficulties, challenges, and illness; even everyday living can cause imbalances and blocks in our energy pathways that can keep our bodies from healing and keep us from reaching our goals.  
                </p>
                <p>
                    Energy work identifies and releases any imbalances and blocks that you might not even know you have.  The result is open energetic pathways that are flowing freely, restoring normal function and balance to your body so it can heal itself and bring you back to wholeness.
                </p>
                {/* <p>
                    It’s like trying to run a race.  Imagine you are at the starting line of a great race.  You are excited. You can’t wait to see how you will do.  The starting gun goes off and you begin to run.  But you look down and see a heavy ball and chain hooked to your ankle.  You can still move forward but you are so slow.  And it is so hard!  The ball and chain is like the energy imbalances and blocks that you have.  Once we remove those, it makes it easy to move forward, to make better choices, to reach your goals and for your body to heal itself. 
                </p> */}
                <p>Energy Work can address:</p>
                <ul className="secondContent-list">
                    <li>Improved Sleep</li>
                    <li>Weight Release</li>
                    <li>Overcoming Fears</li>
                    <li>Creating Joy in your life</li>
                    <li>Relationship Issues</li>
                    <li>Financial Blocks</li>
                </ul>
                <ul className="secondContent-list">
                    <li>Business Success and Relationships</li>
                    <li>Forgiveness for yourself and others</li>
                    <li>Mental Health Challenges</li>
                    <li>Better Communication</li>
                    <li>Physical Pain</li>
                    <li>And many more issues...</li>
                </ul>
            </div>
        <br/>
        </div>
        <Slideshow />
        <div className="thirdContent">
            <div className="mainabout" id="analysis">
                <h2>Receive a FREE Energy Analysis! </h2>
                <p>Fill out the short questionnaire and I will check your energy systems to see if you have blocks or imbalances that need to be corrected.  The body has an order of healing.  I will also identify which issues need to be worked on first. </p>
                <a href="https://goo.gl/forms/zwKj4PokIRyzUgzy1" target="blank">Click Here to Get your FREE Energy Analysis</a>
            </div>
        
        </div>
    </div>
    );
  }
}