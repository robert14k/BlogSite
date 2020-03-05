import React, { Component } from "react";
import { connect } from "react-redux";

class BlogPost extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to my blog!</h2>
        <hr />
        <h3>Blog Posts</h3>

        <h1>{this.props.postTitle}</h1>
        <h2>{this.props.author}</h2>
        <p>{this.props.postContent}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postContent: state.postContent,
    author: state.author,
    postTitle: state.postTitle
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
