import React, { Component } from "react";

import "./clickgame.css";
import Player from "./player";
import Generator from "./generator";

class ClickGame extends Component {
  state = {
    meta: this.props.meta,
    title: this.props.title,

    perClick: 1,
    level: 1,
    growth: 1.07,

    perTick: 0,

    player: new Player("hans", 10000),
    fabric: new Generator("fabric", 100, 35)
  };

  render() {
    return (
      <React.Fragment>
        <div className="grid-game">
          <div className="div-game">
            <span className="span-game"> {this.state.player.name} </span>
          </div>
          <div className="div-game">
            {" "}
            <span className="span-game">
              {" "}
              {this.state.perTick} $ per tick{" "}
            </span>{" "}
          </div>
          <div className="div-game">
            <span className="span-game"> {this.state.player.money} $ </span>
          </div>

          <div className="div-game">
            <br />
          </div>
          <div className="div-game"> </div>
          <div className="div-game"> </div>

          <div className="div-game">
            <span className="span-game"> name </span>
          </div>
          <div className="div-game">
            <div className="grid-game">
              <div className="div-game">
                <span className="span-game"> on_tick </span>
              </div>
              <div className="div-game">
                <span className="span-game"> upgrade </span>
              </div>
              <div className="div-game">
                <span className="span-game"> level </span>
              </div>
            </div>
          </div>
          <div className="div-game">
            <span className="span-game"> buy </span>
          </div>

          <div className="div-game">
            <button className="button-game" onClick={() => this.handleClick()}>
              click
            </button>
          </div>
          <div className="div-game">
            <div className="grid-game">
              <div className="div-game">
                <span className="span-game"> {this.state.perClick} $ </span>
              </div>
              <div className="div-game">
                <button
                  className="button-game"
                  onClick={() => this.handleBuy()}
                >
                  {this.getUpgradeCosts()} $
                </button>
              </div>
              <div className="div-game">
                <span className="span-game"> {this.state.level} </span>
              </div>
            </div>
          </div>
          <div className="div-game">
            <button className="button-game" onClick={() => this.handleBuy()}>
              {this.getBuyCosts()} $
            </button>
          </div>

          <div className="div-game">
            <span className="span-game"> {this.state.fabric.name} </span>
          </div>
          <div className="div-game">
            <div className="grid-game">
              <div className="div-game">
                <span className="span-game">
                  {" "}
                  {this.state.fabric.generate()} ${" "}
                </span>
              </div>
              <div className="div-game">
                <button
                  className="button-game"
                  onClick={() => this.handleBuy(this.state.fabric)}
                >
                  {this.state.fabric.upgradeCosts} $
                </button>
              </div>
              <div className="div-game">
                <span className="span-game">
                  {" "}
                  {this.state.fabric.quantity}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="div-game">
            {" "}
            <button
              className="button-game"
              onClick={() => this.handleBuy(this.state.fabric)}
            >
              {this.state.fabric.buyCosts} $
            </button>{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    window.setInterval(() => this.tick(this), 1000);
  }

  tick() {
    console.log("tick");
    this.state.player.addMoney(this.state.fabric.generate());
    this.setState(this.state);
  }

  handleClick() {
    this.state.player.addMoney(this.state.perClick);
    this.setState({ player: this.state.player });
  }

  handleBuy(generator) {
    if (generator) {
      let costs = generator.buyCosts;
      if (this.state.player.money >= costs) {
        this.state.player.addMoney(-costs);
        generator.buy();
        this.setState({ player: this.state.player });
      }
    } else {
      let costs = this.getBuyCosts();
      if (this.state.player.money >= costs) {
        this.state.player.addMoney(-costs);
        this.setState({ level: this.state.level + 1 });
        this.setState({
          perClick:
            this.state.perClick +
            Math.round(1 * Math.pow(1.05, this.state.level))
        });
      }
    }
  }

  getBuyCosts() {
    return Math.round(28 * Math.pow(this.state.growth, this.state.level));
  }

  getUpgradeCosts() {
    return Math.round(500 * Math.pow(1.5, this.state.level));
  }
}

export default ClickGame;
