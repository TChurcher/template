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
    message: ""
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
        {this.PrintMessage(this.state.message)}
        <button type="submit" id="submit">
          Sign Up
        </button>
      </form>
    );
  }

  onSubmit = event => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password1)
      .then(() => {
        //this.setState({ email: "" });
        //this.setState({ password: "" });
        this.setState({ message: "" });

        firebase.auth().currentUser.sendEmailVerification();
        console.log("sing up:\t\t" + firebase.auth().currentUser.email);
        this.setState({ message: "Account created!" });
        console.log("message:\t\t" + this.state.message);
        //window.location = "/";
      })
      .catch(message => {
        this.setState({ message: message.message });
        console.log("message:\t\t" + this.state.message);
      });
    if (event) {
      event.preventDefault();
    }
  };

  PrintMessage(message) {
    if (message) {
      return (
        <React.Fragment>
          {message} <br />
          <br />
        </React.Fragment>
      );
    }
  }
}

export default LoginForm;
