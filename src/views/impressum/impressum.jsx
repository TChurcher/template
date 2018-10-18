import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";

class Impressum extends Component {
  state = {
    meta: this.props.meta
  };
  render() {
    return (
      <React.Fragment>
        <Header title={this.props.title} />
        <Main>this is impressum</Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Impressum;
