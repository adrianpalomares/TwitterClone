import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Logout from "./components/pages/Logout";
import Signup from "./components/pages/Signup";

class App extends React.Component {
  state = {
    loggedIn: false,
    setLogIn: () => this.setState({ loggedIn: true }),
    setLogOut: () => this.setState({ loggedIn: false })
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login login={this.state.setLogIn} />
          </Route>
          <Route exact path="/logout">
            <Logout logout={this.state.setLogOut} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
