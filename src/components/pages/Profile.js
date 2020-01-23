import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
  state = {
    redirect: false
  };

  fillInFields() {
    // Getting document elements
    let usernameField = document.getElementById("username-field");
    let emailField = document.getElementById("email-field");
    let firstnameField = document.getElementById("firstname-field");
    let lastnameField = document.getElementById("lastname-field");

    axios({
      method: "get",
      url: `https://polar-peak-00113.herokuapp.com/users/${localStorage.getItem(
        "username"
      )}`
    }).then(response => {
      usernameField.value = response.data.username;
      emailField.value = response.data.email;
      firstnameField.value = response.data.firstname;
      lastnameField.value = response.data.lastname;
    });
  }

  componentDidMount() {
    this.fillInFields();
  }

  handleClickSave() {
    // Getting document elements
    let usernameField = document.getElementById("username-field");
    let emailField = document.getElementById("email-field");
    let firstnameField = document.getElementById("firstname-field");
    let lastnameField = document.getElementById("lastname-field");

    axios({
      method: "PUT",
      url: `https://polar-peak-00113.herokuapp.com/users/${localStorage.getItem(
        "_id"
      )}`,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        username: usernameField.value,
        email: emailField.value,
        lastname: lastnameField.value,
        firstname: firstnameField.value
      })
    })
      .then(() => {
        localStorage.setItem("username", usernameField.value);
        localStorage.setItem("email", emailField.value);
        localStorage.setItem("firstname", firstnameField.value);
        localStorage.setItem("lastname", lastnameField.value);
      })
      .then(() => {
        this.setState({ redirect: true });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="profile-page">
        <h1>{localStorage.getItem("username")}'s Profile</h1>
        Username
        <input type="text" id="username-field" />
        <br />
        Email
        <input type="text" id="email-field" /> <br />
        Firstname
        <input type="text" id="firstname-field" /> <br />
        Lastname
        <input type="text" id="lastname-field" /> <br />
        <button id="save" onClick={this.handleClickSave.bind(this)}>
          Save Changes
        </button>
        <button id="reset" onClick={this.fillInFields}>
          Reset
        </button>
      </div>
    );
  }
}

export default Profile;
