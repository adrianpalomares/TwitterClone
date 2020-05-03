import React from "react";
import axios from "axios";

class PostForm extends React.Component {
  handleClick() {
    let username = localStorage.getItem("username");
    let user_id = localStorage.getItem("_id");
    let content = document.getElementById("post-area").value;

    axios({
      url:
        "https://quiet-chamber-54675.herokuapp.com/posts",

      method: "post",
      headers: { "Access-Control-Allow-Origin": true },
      data: {
        user_id: user_id,
        username: username,
        content: content
      }
    }).then(response => {
      this.props.addPost({
        _id: response.data._id,
        user_id: user_id,
        username: username,
        content: content,
        date: response.data.date
      });
    });
    document.getElementById("post-area").value = "";
  }

  render() {
    return (
      <div className="postform">
        <textarea id="post-area" placeholder="What's happening?"></textarea>
        <div>
          <button id="post-button" onClick={this.handleClick.bind(this)}>
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default PostForm;
