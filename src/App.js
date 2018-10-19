import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Impressum from "./views/impressum/impressum";
import Home from "./views/home/home";
import Login from "./views/login/login";
import SignUp from "./views/signup/signup";
import DataSecurity from "./views/datasecurity/datasecurity";
import Game from "./views/game/game";

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
                <Home meta={this.state.meta} title={this.state.authUser} />
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
          <Route
            exact={true}
            path="/datasecurity"
            render={() => (
              <div className="App">
                <DataSecurity meta={this.state.meta} title="Data Security" />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/game"
            render={() => (
              <div className="App">
                <Game meta={this.state.meta} title="A Game" />
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
        ? this.setState({ authUser: firebase.auth().currentUser.email })
        : this.setState({ authUser: null });
      if (firebase.auth().currentUser) {
        console.log("actual user:\t\t" + this.state.authUser);
      } else {
        console.log("null");
      }
    });
    console.log(this.state.authUser);
  }
}

export default App;
