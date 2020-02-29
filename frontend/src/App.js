import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import BlogPost from "./components/BlogPost";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";

import { Provider } from "react-redux";
import { createStore } from "redux";
import blogApp from "../reducers";

let store = createStore(blogApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            Hello
            <Route exact path="/" component={LandingPage} />
            <Route path="/Blog" component={BlogPost} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
