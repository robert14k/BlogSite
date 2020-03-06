import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "antd";

class BlogPost extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(236, 236, 236)", height: "100vh" }}>
        <h2>Welcome to my blog!</h2>
        <hr />
        <h3>Blog Posts</h3>
        {this.props.posts.map(post => (
          <div style={{ alignContent: "center" }}>
            <Card
              title={post.postTitle}
              style={{ margin: "auto", width: "90vw" }}
            >
              <p>{post.postContent}</p>
              <h5>{post.author}</h5>
              <Button style={{ margin: 5 }}>Edit</Button>
              <Button danger style={{ margin: 5 }}>
                Delete
              </Button>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // postContent: state.postContent,
    // author: state.author,
    // postTitle: state.postTitle
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
