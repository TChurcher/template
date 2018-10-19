import React, { Component } from "react";
import "./loginform.css";

import { firebase } from "../../firebase";

class LoginForm extends Component {
  state = {
    meta: this.props.meta,
    email: "",
    password: "",
    error: ""
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <input
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
            type="email"
            required
            placeholder="Email Adress"
          />
        </label>
        <br />
        <label>
          <input
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
            type="password"
            required
            placeholder="Password"
          />
        </label>
        <br />
        {this.printError(this.state.error)}
        <button type="submit" id="submit">
          Log In
        </button>
      </form>
    );
  }

  onSubmit = event => {
    console.log(this.state.email);
    console.log(this.state.password);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({ email: "" });
        this.setState({ password: "" });
        this.setState({ error: "" });
        window.location = "/";
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
    if (event) {
      event.preventDefault();
    }
  };

  printError(error) {
    if (error) {
      return (
        <React.Fragment>
          {error.message} <br />
          <br />
        </React.Fragment>
      );
    }
  }
}

export default LoginForm;
