import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import Container from "../../components/container/container";
import ClickGame from "../../components/clickgame/clickgame";
import Player from "../../components/clickgame/player";

import "./game.css";

class Game extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Header title={this.props.title} />
        <Main>
          <Container
            title="This is a Game."
            entries={[<ClickGame />]}
            footer="Please waste your time here."
          />
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Game;
