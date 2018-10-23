import React, { Component } from "react";
import "./container.css";

class Container extends Component {
  state = {
    title: this.props.title,
    entries: this.props.entries,
    footer: this.props.footer
  };
  render() {
    return (
      <div className="container">
        <div className="container-title">{this.state.title}</div>
        {this.showEntries()}
        <div className="container-footer">{this.state.footer}</div>
      </div>
    );
  }

  showEntries() {
    if (this.state.entries) {
      return this.state.entries.map(entry => (
        <div className="container-main">{entry}</div>
      ));
    }
  }
}

export default Container;
