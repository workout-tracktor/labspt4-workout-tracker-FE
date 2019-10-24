import React from "react";
import styled from "styled-components";
import axios from "axios";
import parse from "html-react-parser";

export default class SuggestedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
  }
  getRequest() {
    axios
      .get(
        `https://wger.de/api/v2/exercise/?language=2&category=${this.props.query}&status=2&limit=5`
      )
      .then(res => {
        this.setState({ exercises: res.data.results });
      });
  }

  render() {
    console.log(this.props.query);
    if (!this.props.show) {
      return null;
    }
    return (
      <Modal>
        {this.getRequest()}
        {this.state.exercises.map((exercise, id) => {
          return (
            <div key={id}>
              <h1> {exercise.name}</h1>
              <Works>{parse(exercise.description)}</Works>
            </div>
          );
        })}
      </Modal>
    );
  }
}

const Modal = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid white;
`;

const Works = styled.div`
  color: white;
`;
