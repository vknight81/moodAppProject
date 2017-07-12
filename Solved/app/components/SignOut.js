import React, { Component } from "react";
import Panel from "./common/Panel";
import API from "../utils/API";

class signOut extends Component {
  
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>You Are Now Signed Out</h1>
          <p>Come back to visit us soon!</p>
        </div>
        <div className="container">
        <div className="row">
          {this.renderQuotes()}
        </div>
        </div>
      </div>
    );
  }
}

export default signOut;
