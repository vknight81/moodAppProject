import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import API from "../utils/API";

class myDiary extends Component {
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
      
      
      <div className="row">
        <div className="col-lg-2">
          <h1></h1> 
        </div>
        <div className="col-lg-8" id="moodSelector">
          <h2>What color is MyMood?</h2>
          }
        </div>
        <div className="col-lg-2">
          <h1></h1> 
        </div>
      </div>

 
      <div className="row">
        <div className="col-lg-8 main" id="mainBorder">
           <QuoteForm getQuotes={this.getQuotes} />
        </div>
        <div className="col-lg-4 main" id="mainRightBorder">
          <h5>My Diary</h5>
          {this.renderQuotes()}
        </div>         
      </div>
      

      <div className="row">
        <div className="col-lg-12 main" id="mainBorder"> 
            <h3>MyMood Now</h3>
        </div>       
      </div>
  </div>
    );
  }
}

export default myDiary;
