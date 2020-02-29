import React, { Component } from "react";
import { connect } from "react-redux";

class BlogPost extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to My Blog page 2</h2>
        <h3>{this.props.postTitle}</h3>
        <p style={{ padding: 20}}>{this.props.postContent}</p>
        <button>Edit</button>
        <h5>{this.props.postTitle}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postContent: state.postContent,
    postTitle: state.postTitle,
    postAuthor: state.postAuthor
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
