import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  componentDidMount() {
    localStorage.clear();
    this.props.logout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default Logout;
