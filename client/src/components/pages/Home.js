import React from "react";
import Postlist from "../Postlist";
import PostForm from "../PostForm";
import axios from "axios";

class Home extends React.Component {
  state = {
    posts: [],
    addPost: post => {
      this.setState({ posts: this.state.posts.concat(post) });
      console.log(this.state.posts);
    }
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://polar-peak-00113.herokuapp.com/posts"
      )
      .then(response => this.setState({ posts: response.data }));
  }

  render() {
    return (
      <React.Fragment>
        {localStorage.getItem("loggedIn") ? (
          <h1 className="welcome-heading">
            Welcome, {localStorage.getItem("username")}
          </h1>
        ) : (
          <h1 className="welcome-heading">Welcome</h1>
        )}
        {localStorage.getItem("loggedIn") ? (
          <PostForm addPost={this.state.addPost} />
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <Postlist posts={this.state.posts} />
      </React.Fragment>
    );
  }
}

export default Home;
