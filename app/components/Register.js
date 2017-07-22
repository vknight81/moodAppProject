import React, { Component } from "react";
import API from "../utils/API";

class register extends Component {
  constructor() {
    super();
    this.state = {
      inputUser: "",
      inputEmail: "",
      inputPassword: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleButtonClick() {
    const newUser = this.state;
    API.saveUser(newUser).then(this.props.getUsers);
    this.setState({ inputUser: "" , inputEmail: "", inputPassword: ""});
  }
  render() {
    return (
      <div className="col-md-4">
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="username">Username:</label>
          <textarea
            style={{resize: "none"}}
            name= "inputUser"
            onChange={this.handleInputChange}
            value={this.state.inputUser}
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
            name= "inputEmail"
            onChange={this.handleInputChange}
            value={this.state.inputEmail}
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
            name= "inputPassword"
            onChange={this.handleInputChange}
            value={this.state.inputPassword}
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

const styles={
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