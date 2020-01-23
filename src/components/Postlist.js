import React from "react";
import Container from "@material-ui/core/Container";
import Tweet from "./Tweet";

class Postlist extends React.Component {
  render() {
    if (this.props.posts.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      console.log(this.props.posts);
      return (
        <Container className="Container">
          {this.props.posts
            .slice(0)
            .reverse()
            .map(function(post) {
              return (
                <Tweet
                  key={post._id}
                  firstname={post.firstname}
                  username={post.username}
                  content={post.content}
                />
              );
            })}
        </Container>
      );
    }
  }
}

export default Postlist;
