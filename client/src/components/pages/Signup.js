import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Signup extends React.Component {
  state = {
    redirect: false
  };

  handleClick() {
    // Handle click for submit button
    let username = document.getElementById("username-form").value;
    let email = document.getElementById("email-form").value;
    let password = document.getElementById("password-form").value;
    let firstname = document.getElementById("firstname-form").value;
    let lastname = document.getElementById("lastname-form").value;

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://polar-peak-00113.herokuapp.com/users",
        {
          username: username,
          email: email,
          password: password,
          firstname: firstname,
          lastname: lastname
        }
      )
      .then(() => {
        this.setState({ redirect: true });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="signup-form">
        <h1>Sign up</h1>
        Username:
        <input type="text" id="username-form" /> <br />
        Email: <input type="text" id="email-form" /> <br />
        Password: <input type="password" id="password-form" /> <br />
        First Name: <input type="text" id="firstname-form" /> <br />
        Last Name: <input type="text" id="lastname-form" /> <br />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default Signup;
