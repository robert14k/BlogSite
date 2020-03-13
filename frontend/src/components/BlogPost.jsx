import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Form, Input } from "antd";
import { posts } from "../actions";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class BlogPost extends Component {
  // this is used to hold a very small limited state before the
  //actions get called and the redux kicks in

  state = {
    postContent: "",
    author: "",
    postTitle: "",
    displayAddPost: false,
    updatePostId: null
  };
  resetForm = () => {
    this.setState({
      postContent: "",
      author: "",
      postTitle: "",
      updatePostId: null,
      displayAddPost: false
    });
  };

  selectForEdit = id => {
    let post = this.props.post[id];
    this.setState({
      postContent: post.postContent,
      author: post.author,
      postTitle: post.postTitle,
      updatePostId: id
    });
  };

  submitPost = e => {
    e.preventDefault();
    if (this.state.updatePostId === null) {
      this.props.addPost(
        this.state.postContent,
        this.state.author,
        this.state.postTitle
      );
    } else {
      this.props.updatePost(
        this.state.updatePostId,
        this.state.postContent,
        this.state.author,
        this.state.postTitle
      );
    }

    this.resetForm();
  };

  render() {
    return (
      <div style={{ backgroundColor: "rgb(236, 236, 236)", height: "100vh" }}>
        <h2>Welcome to my blog!</h2>
        <hr />
        <h3>Blog Posts</h3>
        <Button
          onClick={() => {
            this.setState({ displayAddPost: true });
          }}
        >
          Add Post
        </Button>
        {this.state.displayAddPost && (
          <Form onSubmitCapture={this.submitPost}>
            <Card
              title={
                <Input
                  style={{ width: "auto", padding: "5px" }}
                  value={this.state.postTitle}
                  placeholder={"Add Title"}
                  onChange={e => this.setState({ postTitle: e.target.value })}
                />
              }
              style={{ margin: "auto", width: "90vw" }}
            >
              <CKEditor
                style={{ width: "90%", padding: "5px" }}
                editor={ClassicEditor}
                data={this.state.postContent}
                // placeholder={"Add Content"}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ postContent: data });
                }}
              />
              <Input
                style={{ width: "auto", padding: "5px" }}
                value={this.state.author}
                placeholder={"Add Author"}
                onChange={e => this.setState({ author: e.target.value })}
              />
              <Form.Item>
                <Button htmlType="submit" type="primary" style={{ margin: 5 }}>
                  Add
                </Button>
              </Form.Item>
              <Button danger style={{ margin: 5 }} onClick={this.resetForm}>
                Cancel
              </Button>
            </Card>
          </Form>
        )}
        {this.props.posts.map((post, id) => (
          <div
            style={{ alignContent: "center", padding: "10px" }}
            key={`post_${id}`}
          >
            <Card
              title={post.postTitle}
              style={{ margin: "auto", width: "90vw" }}
            >
              <div dangerouslySetInnerHTML={{__html: post.postContent}}></div>

              <h5>By: {post.author}</h5>
              <Button
                style={{ margin: 5 }}
                onClick={() => this.selectForEdit(id)}
              >
                Edit
              </Button>
              <Button
                danger
                style={{ margin: 5 }}
                onClick={() => this.props.deletePost(id)}
              >
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

//this holds the calls for adding stuff i think
const mapDispatchToProps = dispatch => {
  return {
    addPost: (postContent, author, postTitle) => {
      dispatch(posts.addPost(postContent, author, postTitle));
    },
    updatePost: (id, postContent, author, postTitle) => {
      dispatch(posts.updatePost(id, postContent, author, postTitle));
    },
    deletePost: id => {
      dispatch(posts.deletePost(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
