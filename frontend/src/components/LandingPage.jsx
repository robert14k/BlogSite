import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to My Blog</h2>
        <p>
          <Link to="/contact">Click Here</Link> to contact us!
          <Link to="/BlogPost">Click Here</Link> to view the Blog.
        </p>
      </div>
    );
  }
}
