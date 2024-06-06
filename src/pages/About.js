import React, { Component } from 'react';
  
import "./About.css";
import profilePic from "../assets/profile_pic_Jared_Kramer.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                // Image goes here
                src={profilePic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Jared Kramer</div>
              <div className="brief_description">
                My name is Jared Kramer and I am a rising junior at the University of Wisconsin-Madison and I am studying computer science. 
                One of my hobbies is music, I love listening to music and playing instruments as well. I play the guitar, bass, and drums. 
                Of the instruments that I play the guitar is my favorite. I have two sibiling an older brother and a younger sister. 
                A fun fact about me is that I can put both of my feet behind my head. 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
