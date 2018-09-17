import React, { Component } from "react"
import family from "../Images/Family.jpg"
export default class About extends Component {
  render(){
    return(
      <div class="content">
        <div class="about">
            <p>
              Hi! My name is Julie. I have 7 children. I was raised in south-east Idaho and I met my husband at the

              local grocery store. We have been married almost 26 years. I enjoy bike riding, reading and spending

              time with friends. I love to study and learn new things.
            </p>
            <p>
              I was introduced to energy work by my sister-in-law. who told me about the book, The Emotion Code, by

              Dr. Bradley Nelson. I was fascinated! When I had someone do energy work on me we addressed

              financial blocks I was having. I was amazed at the trapped emotions and issues that came up in my

              sessions. Within 3 months I had 3 job offers and my income tripled! I knew I had to learn how to do it

              myself.
            </p>
            <p>
              I wanted to be able to help my children who struggle with anxiety. I have been amazed at the immediate

              difference energy work has make in their lives as well as mine. I started energy work because I wanted

              to help my family. The results I have seen have made me passionate about helping as many people as I

              can.
            </p>
            <p>
                I am Emotion Code certified and trained in 5 Keystones for Health and Divine Laws by Kimberly Watts.
            </p>
            <img src={family} className="family-img"/>
          </div>
        </div>
    );
  }
}