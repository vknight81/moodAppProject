import React, { Component } from "react";
import Home from "../components/Home";
import QuoteForm from "./common/QuoteForm";
import API from "../utils/API";


class splashPage extends Component {

 render(){
    return (



     <div className="bgimg  w3-text-black">
        <div className="w3-display-middle w3-jumbo">
          <p>MyMood</p>
        </div>

   <p><button onclick="document.getElementById('menu').style.display='block'"
    className="w3-button w3-black">Register</button></p>
    <p><button onclick="document.getElementById('contact').style.display='block'"
    className="w3-button w3-black">Log In</button></p>



  <div className="bgimg  w3-text-black">
        
             
         
       
       <div className="w3-display-bottomleft w3-container">
          <p className="w3-xlarge">Today's date: Saturday  July 22, 2017</p>
          <p className="w3-large"></p>
          <p>by V Knight, L Johnson, K Turock, A Beeju <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        </div>
        </div>
        </div>
    );
  }
}



export default splashPage;