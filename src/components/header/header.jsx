import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = {
    title: this.props.title
  };
  render() {
    return (
      <header className="header">
        <div className="grid-header">
          <div className="grid-header-item-dark" />
          <div className="grid-header-item-dark" />
          <div className="grid-header-item-dark" />

          <div className="grid-header-item-left">
            <a href="/">
              <img
                className="img-header"
                src="logo.png"
                alt="Itaslian Trulli"
              />
            </a>
          </div>
          <div className="grid-header-item">{this.state.title}</div>
          <div className="grid-header-item">Acc</div>
          <div className="grid-header-item">
            <ul>
              <li>
                <a className="a-navi" href="/">
                  home
                </a>
              </li>
              <li>
                <a className="a-navi" href="/game">
                  game
                </a>
              </li>
            </ul>
          </div>
          <div className="grid-header-item">
            <ul>
              <li>
                <a className="a-navi" href="/login">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
