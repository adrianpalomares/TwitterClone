import React from "react";

class Tweet extends React.Component {
  render() {
    return (
      <div className="Tweet">
        <h3>@{this.props.username}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Tweet;
