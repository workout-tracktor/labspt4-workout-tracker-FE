import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

export default class SuggestedModal extends React.Component {
  render() {
    return (
      <Modal>
        {this.props.exercises.map((exercise, id) => {
          return (
            <Exercise key={id}>
              <Name> {exercise.name}</Name>
              <Description>
                {parse(exercise.description)}
                <button>Add Workout</button>
              </Description>
            </Exercise>
          );
        })}
      </Modal>
    );
  }
}

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  position: relative;
  height: auto;
  margin: 0;
  background: radial-gradient(
    360.51px at 64.26% 22.01%,
    #394366 0%,
    #29304a 100%
  );
  border-radius: 16px;
  border: none;
`;

const Exercise = styled.details`
  width: 94%;
  border-radius: 16px;
  margin-bottom: 15px;
`;

const Name = styled.summary`
  margin-top: 5px;
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  font-size: 40px;
`;

const Description = styled.div`
margin: 15px 0px
padding: 0px 25px;
line-height: 19px;
font-family: Roboto Condensed, sans-serif;
  font-size: 16px;
  color: white;
`;