import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import Container from "../../components/container/container";

import "./game.css";

class Game extends Component {
  state = {
    meta: this.props.meta,
    title: this.props.title,

    name: "player",
    money: 0,
    multiplier: 1,
    clicks: 0,
    level: 1
  };

  render() {
    return (
      <React.Fragment>
        <Header title={this.props.title} />
        <Main>
          <Container
            title="This is a Game."
            footer="Please waste your time here."
          >
            <span> {this.state.name} </span>
            <span> level: {this.state.level} </span>
            <br /> <br />
            <span> money: {this.state.money} </span>
            <span> multiplier: {this.state.multiplier} </span>
            <span> clicks: {this.state.clicks} </span>
            <br />
            <br />
            <button onClick={() => this.handleClick()}>click</button>
            <br /> <br />
            <button onClick={() => this.handleUpgrade()}>
              upgrade ({this.getUpgradeCosts()})
            </button>
          </Container>
        </Main>
        <Footer />
      </React.Fragment>
    );
  }

  handleClick() {
    this.setState({ money: this.state.money + this.state.multiplier });
    this.setState({ clicks: this.state.clicks + 1 });
  }

  handleUpgrade() {
    let costs = this.getUpgradeCosts();
    if (this.state.money >= costs) {
      this.setState({ money: this.state.money - costs });
      this.setState({ level: this.state.level + 1 });
      this.setState({
        multiplier: Math.round(Math.pow(this.state.level, 1.1))
      });
    }
  }

  getUpgradeCosts() {
    return Math.round(28 * Math.pow(1.068, this.state.level));
  }
}

export default Game;
