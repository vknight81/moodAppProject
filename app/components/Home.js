import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import API from "../utils/API";
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';



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
          <StyleRoot>
            <Coverflow
              displayQuantityOfSide={2}
              navigation={true}
              enableHeading={true}
              active={0}
              media={{
                '@media (max-width: 900px)': {
                  width: '900px',
                  height: '375px'
                },
                '@media (min-width: 900px)': {
                  width: '900px',
                  height: '375px'
                }
              }}
              >
              <img src='../css/happy_pic.png'  alt='Happy' data-action="https://capitalxtra.com" />
              <img src='../css/sad_pic.png' alt='Sad' data-action="https://www.values.com"/>
              <img src='../css/curious_pic.png' alt='Curious' data-action="https://doce.cc/"/>
              <img src='../css/evil_pic.png' alt='Evil' data-action="http://tw.yahoo.com"/>
              <img src='../css/indifferent_pic.png' alt='Indifferent' data-action="http://tw.yahoo.com"/>
              <img src='../css/exhausted_pic.png' alt='Exhausted' data-action="https://ladanspa.com"/>
            </Coverflow>
          </StyleRoot>
            
            {document.querySelector('#mainBorder')}
          
        </div>
          
      <div>  
        <div className="col-lg-4 main main-section" id="mainRightBorder">
          <h3>My Diary</h3>
          {this.renderQuotes()}
        </div>         
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

export default Home;
