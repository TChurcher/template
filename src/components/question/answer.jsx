import React, { Component } from "react";

import "./answer.css";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }
  state = {
    answer: this.props.answer,
    value: this.props.value,
    isChecked: false
  };

  render() {
    return (
      <React.Fragment>
        <label className="answer">
          <div className="answer">{this.state.answer}</div>
          <input type="checkbox" onChange={this.handleCheckBoxChange} />
          <span className="checkmark" />
        </label>
      </React.Fragment>
    );
  }

  handleCheckBoxChange(event) {
    this.setState({ isChecked: event.target.checked });
  }

  validate() {
    return this.props.value === this.state.isChecked;
  }
}

export default Answer;
