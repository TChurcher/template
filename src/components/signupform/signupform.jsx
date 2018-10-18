import React, { Component } from "react";
import "./signupform.css";

import { firebase } from "../../firebase";

class LoginForm extends Component {
  state = {
    meta: this.props.meta,
    name: "",
    email: "",
    password1: "",
    password2: "",
    error: ""
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <input
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
            type="text"
            required
            placeholder="Nickname"
          />
        </label>
        <br />
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
            value={this.state.password1}
            onChange={event => this.setState({ password1: event.target.value })}
            type="password"
            required
            placeholder="Password"
          />
        </label>
        <br />
        <label>
          <input
            value={this.state.password2}
            onChange={event => this.setState({ password2: event.target.value })}
            type="password"
            required
            placeholder="Password Again"
          />
        </label>
        <br />
        {this.printError(this.state.error)}
        <button type="submit" id="submit">
          Sign Up
        </button>
      </form>
    );
  }

  onSubmit = event => {
    console.log(this.state.email);
    console.log(this.state.password1);
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password1)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification;
        this.setState({ email: "" });
        this.setState({ password: "" });
        this.setState({ error: "" });
        console.log("done.1");
        console.log(firebase.auth().currentUser.email);
        console.log("done.2");
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
