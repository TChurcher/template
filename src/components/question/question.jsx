import React, { Component } from "react";
import Answer from "../../components/question/answer";

import "./question.css";

class Question extends Component {
  constructor(props) {
    super(props);
    this.ref_answers = []; // create refs for answers
    var i;
    for (i = 0; i < props.answers.length; i++) {
      this.ref_answers[i] = React.createRef();
    }
  }

  state = {
    question: this.props.question,
    answers: this.props.answers,
    ref_answers: []
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="div-question">{this.state.question}</div>
          <div className="div-answers">{this.showAnswers()}</div>
          <button
            className="button-question"
            type="button"
            onClick={() => this.validate(this)}
          >
            fertig
          </button>
        </form>
      </React.Fragment>
    );
  }

  showAnswers() {
    if (this.state.answers) {
      return this.state.answers.map((answer, index) => (
        <Answer
          key={index}
          ref={this.ref_answers[index]}
          answer={answer.props.answer}
          value={answer.props.value}
        />
      ));
    }
  }

  validate() {
    var i;
    var valide = true;
    for (i = 0; i < this.ref_answers.length; i++) {
      if (!this.ref_answers[i].current.validate()) {
        console.log(this.ref_answers[i].current.state);
        valide = false;
        break;
      }
    }
    console.log("VALIDATED:" + valide);
  }
}

export default Question;
