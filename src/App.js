import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Impressum from "./views/impressum/impressum";
import Home from "./views/home/home";
import Login from "./views/login/login";
import SignUp from "./views/signup/signup";

import { firebase } from "./firebase";

class App extends Component {
  state = {
    meta: {
      company_name: "FIRMA GmbH"
    },
    authUser: null
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="App">
                <Home meta={this.state.meta} title={this.state.meta.authUser} />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/impressum"
            render={() => (
              <div className="App">
                <Impressum meta={this.state.meta} title="Impressum" />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/login"
            render={() => (
              <div className="App">
                <Login meta={this.state.meta} title="Log In" />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/signup"
            render={() => (
              <div className="App">
                <SignUp meta={this.state.meta} title="Sign Up" />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser: "yas" })
        : this.setState({ authUser: null });
      if (firebase.auth().currentUser) {
        console.log(firebase.auth().currentUser.email);
        console.log(this.state.authUser);
      } else {
        console.log("null");
      }
    });
  }
}

export default App;
