import React, { Component } from "react";
import "./container.css";

class Container extends Component {
  state = {
    title: this.props.title,
    footer: this.props.footer
  };
  render() {
    return (
      <div className="container">
        <div className="container-title">{this.state.title}</div>
        {this.props.children}
        <div className="container-footer">{this.state.footer}</div>
      </div>
    );
  }
}

export default Container;
