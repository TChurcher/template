import React, { Component } from "react";

import "./answer.css";

class Answer extends Component {
  state = {
    question: this.props.question,
    onClick: this.props.onClick
  };

  render() {
    return (
      <React.Fragment>
        <label className="answer">
          <div className="answer">{this.state.question}</div>
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
      </React.Fragment>
    );
  }
}

export default Answer;
