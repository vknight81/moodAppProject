import React, { Component } from "react";
import API from "../../utils/API";

class Panel extends Component {
  // favoriteQuote toggles a quote's favorite status in the db and then
  // reloads all quotes in our app
  favoriteQuote(quote) {
    API.favoriteQuote(quote).then(this.props.getQuotes);
  }
   // deleteQuote deletes a quote in the db and then
  // reloads all quotes in our app
  deleteQuote(id) {
    API.deleteQuote(id).then(this.props.getQuotes);
  }
  //TODO create a new method above and change the method favoriteQuote below in the first onclick event under className to switch to corresponding user's profile
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-lg-12">
        <div className="panel panel-default animated fadeInDown">
          <div className="panel-body">

            <i
              onClick={() => this.favoriteQuote(this.props.quote)}
              style={styles.photoStyle}
              className="fa fa-user"
              aria-hidden="true"
            />
            <i
              onClick={() => this.favoriteQuote(this.props.quote)}
              style={styles.favoriteStyle}
              className={this.props.quote.favorited ? "fa fa-star gold" : "fa fa-star-o"}
              aria-hidden="true"
            />
            <i
              onClick={() => this.deleteQuote(this.props.quote._id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
            />
            {this.props.quote.text}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  photoStyle: {
    cursor: "pointer",
    marginLeft: 5,
    float: "left"
  },
  favoriteStyle: {
    cursor: "pointer",
    marginRight: 5,
    float: "right"
  },
  deleteStyle: {
    cursor: "pointer",
    marginRight: 5,
    color: "red",
    float: "right"
  }
};

export default Panel;
