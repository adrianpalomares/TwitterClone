import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    redirect: false
  };

  handleClick() {
    let formUsername = document.getElementById("login-username").value;
    let formPassword = document.getElementById("login-password").value;

    axios({
      method: "post",
      url:
        "https://cors-anywhere.herokuapp.com/https://polar-peak-00113.herokuapp.com/auth",
      data: { username: formUsername, password: formPassword }
    })
      .then(response => {
        if (response.data.result === true) {
          return axios.get(
            `https://cors-anywhere.herokuapp.com/https://polar-peak-00113.herokuapp.com/users/${formUsername}`
          );
        } else {
          throw new Error("Username or password is wrong");
        }
      })
      .then(response => {
        console.log(response);
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("_id", response.data._id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("firstname", response.data.firstname);
        localStorage.setItem("lastname", response.data.lastname);
      })
      .then(() => {
        this.setState({ redirect: true });
        this.props.login();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-form">
        <h1>Login</h1>
        <div>
          Username: <input id="login-username" type="text" />
          <br />
          Password: <input id="login-password" type="password" />
          <br />
          <button onClick={this.handleClick.bind(this)}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
