import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import Container from "../../components/container/container";

class Home extends Component {
  state = {
    meta: this.props.meta,
    title: this.props.title
  };

  render() {
    return (
      <React.Fragment>
        <Header title={this.props.title} />
        <Main>
          <Container
            title="This is Doggy."
            entries={[
              <img
                src="https://s7d2.scene7.com/is/image/PetSmart/SV0401_CATEGORY_HERO-Dog-Dog-20160818?$SV0401$"
                alt="SWEET<3"
              />
            ]}
            footer="Doggy is a good boy."
          />
        </Main>
        <Footer />
      </React.Fragment>
    );
  }

  componentWillReceiveProps(newProps) {
    this.setState({ title: newProps.title });
  }
}

export default Home;
