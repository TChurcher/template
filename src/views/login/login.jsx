import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Container from "../../components/container/container";
import "./login.css";

import LoginForm from "../../components/loginform/loginform";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title={this.props.title} />
        <Main>
          <Container
            title="Log In"
            footer={
              <div>
                No Account Yet?
                <br />
                <a className="a-navi" href="/signup">
                  Sign Up
                </a>
              </div>
            }
          >
            <LoginForm />
          </Container>
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Login;
