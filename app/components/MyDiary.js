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
      console.log(res.data);
      this.setState({ quotes: res.data.reverse() });
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
        <div className="col-lg-12" id="moodSelector">
          <h1>What color is MyMood?</h1>
        </div>
      </div>

 
      <div className="row">
        <div className="col-lg-8 main main-section" id="mainBorder">
           <QuoteForm getQuotes={this.getQuotes} />
        </div>
        <div className="col-lg-4 main main-section" id="mainRightBorder">
          <h3>My Diary</h3>
          {this.renderQuotes()}
        </div>         
      </div>
      

      <div className="row">
        <div className="col-lg-12 main" id="bottomSection">
          <div className="row">
           <h3>Quote of the Day</h3>
          <h4>Happiness is a journey, not a destination.</h4>
          </div>
        </div>       
      </div>
  </div>
    )
  }
}

export default myDiary;
