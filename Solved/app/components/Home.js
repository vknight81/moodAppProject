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
         <div className="row">
          <div id="myCarousel" className="carousel slide">
          
          <ol className="carousel-indicators">
            <li className="item1 active"></li>
            <li className="item2"></li>
            <li className="item3"></li>
            <li className="item4"></li>
          </ol>

        
          <div className="carousel-inner" role="listbox">

           <div className="item active">
              <img src="https://dotunroy.files.wordpress.com/2015/05/happy-people.jpg" alt="Chania" width="460" height="345" />
              <div className="carousel-caption">
                <h3>Chania</h3>
                <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
              </div>
            </div>

           <div className="item">
              <img src="https://cdn.powerofpositivity.com/wp-content/uploads/2014/07/girl-blowing-bubbles.png" alt="Chania" width="460" height="345" />
              <div className="carousel-caption">
                <h3>Chani</h3>
                <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
              </div>
            </div>
          
           <div className="item">
              <img src="https://thoughtcatalog.files.wordpress.com/2014/07/screen-shot-2014-07-31-at-6-09-12-pm.png?w=786" alt="Flower" width="460" height="345" />
              <div className="carousel-caption">
                <h3>Flowers</h3>
                <p>Beautiful flowers in ari, Crete.</p>
              </div>
            </div>

           <div className="item">
              <img src="http://irinaspage.com/wp-content/uploads/2017/05/preach_to_exhausted_623937454.jpg" alt="Flower" width="460" height="345" />
              <div className="carousel-caption">
                <h3>Flower</h3>
                <p>Beautiful flowers in Kolymbari, Crete.</p>
              </div>
            </div>
        
         </div>

        
          <a className="left carousel-control" role="button">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" role="button">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
                  </div>
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
