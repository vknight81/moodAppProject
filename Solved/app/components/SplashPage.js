import React, { Component } from "react";
import Home from "../components/Home";
import QuoteForm from "./common/QuoteForm";
import API from "../utils/API";

class splashPage extends Component {

  render(){
    return (
      <div className="bgimg w3-display-container w3-text-white">
        <div className="w3-display-middle w3-jumbo">
          <p>MyMood</p>
        </div>
        <div className="w3-display-topleft w3-container w3-xlarge">
          <span className="input-group-btn">
              <Link to="/register">Register</Link> 
          </span>
          <span className="input-group-btn">
              <Link to="/register">Sign In</Link> 
          </span>
        </div>
        <div className="w3-display-bottomleft w3-container">
          <p className="w3-xlarge"></p>
          <p className="w3-large"></p>
          <p>powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        </div>
      </div>
    );
  }
}


export default splashPage;