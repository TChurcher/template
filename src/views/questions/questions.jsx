import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Container from "../../components/container/container";
import Question from "../../components/question/question";
import Answer from "../../components/question/answer";

import "./questions.css";

class Questions extends Component {
  state = {
    meta: this.props.meta,
    title: this.props.title
  };

  render() {
    return (
      <React.Fragment>
        <Header title={this.props.title} />
        <Main>
          <Container
            title={"Frage 1"}
            entries={[
              <Question
                question="Warum sind Bananen meistens leicht gebogen und nur sehr selten gerade?"
                answers={[
                  <Answer
                    answer="weil niemand in den Urwald zog und die Banane gerade bog"
                    value={true}
                  />,
                  <Answer
                    answer="damit sie als Bananen erkannt werden können"
                    value={false}
                  />,
                  <Answer
                    answer="weil sie aufgrund der Erdrotation nur so wachsen können"
                    value={true}
                  />
                ]}
              />
            ]}
            footer={"footer"}
          />
        </Main>
        <Footer />
      </React.Fragment>
    );
  }

  handleClick(right) {
    if (right) {
      console.log("right");
    } else {
      console.log("false");
    }
  }
}

export default Questions;
