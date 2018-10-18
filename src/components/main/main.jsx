import React, { Component } from "react";

import "./main.css";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <main className="main">
          <div className="grid-main">
            <div className="main1" />
            <div className="main2">{this.props.children}</div>
            <div className="main3" />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
