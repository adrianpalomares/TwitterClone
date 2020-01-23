import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>{localStorage.getItem("username")}</h1>
      </div>
    );
  }
}

export default Profile;
