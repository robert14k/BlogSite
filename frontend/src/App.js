import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          Hello
          <Route exact path="/" component={LandingPage} />
          <Route path="/Blog" component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
