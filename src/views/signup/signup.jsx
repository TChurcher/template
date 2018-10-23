import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Container from "../../components/container/container";
import "./signup.css";

import SignUpForm from "../../components/signupform/signupform";

class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title={this.props.title} />
        <Main>
          <Container
            title="Sign Up"
            entries={[<SignUpForm />]}
            footer={<div>Create a new Account.</div>}
          />
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default SignUp;
