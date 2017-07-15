import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import API from "../utils/API";

class Home2 extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this);
  }
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
  // A helper method for rendering one panel for each quote
  renderQuotes() {
    return this.state.quotes.map(quote => (
      <Panel
        quote={quote}
        key={quote._id}
        getQuotes={this.getQuotes}
      />
    ));
  }
  render() {
    return (  
<div className="container-fluid">
      
      
      <div className="row1">
        <div className="col-lg-3">
          <h1></h1> 
        </div>
        <div className="col-lg-6" id="moodSelector">
          {//mood picker feature goes here}
          <h1>What color is your Mood?</h1>

          }
        </div>
        <div className="col-lg-3">
          <h1></h1> 
        </div>
      </div>

 
      <div className="row2">

        

        <div className="col-lg-8 main" id="mainBorder"> 
        
            <div className="row">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
            <img className="d-block img-fluid" src="#" data-src="holder.js/900x400?theme=social" alt="First slide">
            </div>
            <div className="carousel-item">
            <img className="d-block img-fluid" src="#" data-src="holder.js/900x400?theme=industrial" alt="Second slide">
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
              
        </div>
        
        </div>
        

        
        <div className="col-lg-4 main" id="mainRightBorder">
            
             <div className="row">
          <hr />
          {this.renderQuotes()}
        </div>
      </div>
  


    );
  }
}

export default Home;