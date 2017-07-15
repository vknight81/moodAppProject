import React, { Component } from "react";
import API from "../utils/API";

class register extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  handleButtonClick() {
    const newUser = this.state.inputValue;
    API.saveUser(newUser).then(this.props.getUser);
    this.setState({ inputValue: "" });
  }
  render() {
    return (
      <div className="col-md-12">
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="username">Username:</label>
          <textarea
            style={{resize: "none"}}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="Username"
            className="form-control"
            id="username"
            rows="1"
          />
        </div>
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="email">Email Address:</label>
          <textarea
            style={{resize: "none"}}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="Email Address"
            className="form-control"
            id="email"
            rows="1"
          />
        </div>
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="password">Password:</label>
          <textarea
            style={{resize: "none"}}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="Password"
            className="form-control"
            id="password"
            rows="1"
          />
        </div>
          <button
            onClick={this.handleButtonClick}
            className="btn btn-success"
            style={styles.buttonStyle}
          >
            Submit
          </button>
        
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    float: "right",
    marginTop: 10
  },
  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};

export default register;