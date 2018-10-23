import React, { Component } from "react";

import "./question.css";

class Question extends Component {
  state = {
    question: this.props.question,
    answers: this.props.answers,
    validate: this.props.validate
  };

  render() {
    return (
      <React.Fragment>
        <div className="div-question">{this.state.question}</div>
        <div className="div-answers">{this.showAnswers()}</div>
        <button className="button-question" onClick={this.state.validate}>
          fertig
        </button>
      </React.Fragment>
    );
  }

  showAnswers() {
    if (this.state.answers) {
      return this.state.answers.map(answer => <div>{answer}</div>);
    }
  }
}

export default Question;
