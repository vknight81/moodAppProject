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
        </div>
        <div className="col-lg-2">
          <h1></h1> 
        </div>
      </div>

 
      <div className="row">
        <div className="col-lg-8 main" id="mainBorder">
          <StyleRoot>
            <Coverflow
              displayQuantityOfSide={2}
              navigation={true}
              enableHeading={true}
              active={0}
              media={{
                '@media (max-width: 900px)': {
                  width: '800px',
                  height: '375px'
                },
                '@media (min-width: 900px)': {
                  width: '800px',
                  height: '375px'
                }
              }}
              >
              <img src='images/album-1.png' alt='Happy' data-action="https://facebook.github.io/react/"/>
              <img src='images/album-2.png' alt='Sad' data-action="http://passer.cc"/>
              <img src='images/album-3.png' alt='Anxious' data-action="https://doce.cc/"/>
              <img src='images/album-4.png' alt='Exhausted' data-action="http://tw.yahoo.com"/>
            </Coverflow>
          </StyleRoot>
            
            {document.querySelector('#mainBorder')}
          
          </div>
          
           
        <div className="col-lg-4 main" id="mainRightBorder">
          <h5>My Diary</h5>
          {this.renderQuotes()}
        </div>         
      </div>
      


      <div className="row">
        <div className="col-lg-12 main" id="mainBorder"> 
            <div className="row">
            <h3>MyMood Now</h3>
            </div>
        </div>       
      </div>

</div>
    );
  }
}

export default Home;
