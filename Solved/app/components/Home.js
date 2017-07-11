import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import API from "../utils/API";

class Home extends Component {
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
              <QuoteForm getQuotes={this.getQuotes} />
        </div>
        
        </div>
        

        
        <div className="col-lg-4 main" id="mainRightBorder">
            
             <div className="row">
          <hr />
          {this.renderQuotes()}
        </div>
      </div>
    </div>


     
      <div className="row3" id="topBorder">
        
        

        <div className="col-lg-4 third">
          <h3>Current Friends Button</h3>
        </div>
        <div className="col-lg-4 third">
          <h3>Add MoodApp Friends Button</h3>
        </div>
        <div className="col-lg-4 third">
          <h3>Invite New Friends to MoodApp Button</h3>
      </div>
 
      </div>
  </div>
  


    );
  }
}

export default Home;
