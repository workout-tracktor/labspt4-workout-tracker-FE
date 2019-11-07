import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

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
                <Link to={{
                   pathname: "/exercise-form",
                   state: {
                     exerciseName: exercise.name
                   }
                   }}>
                  <Button>Add Workout</Button>
                </Link>
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
  &::-webkit-details-marker: {
    display: "none";
  }
`;

const Name = styled.summary`
  margin-top: 5px;
  font-size: 18px;
  opacity: 0.7;
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;

const Description = styled.div`

justify-content: center;
 p {
   margin-bottom: 18px;
 }
margin: 15px 0px
padding: 0px 25px;
line-height: 24px;
font-family: Roboto Condensed, sans-serif;
  font-size: 18px;
  color: white;
`;

const Button = styled.button`
  margin-left: 38%;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid #03a3f3;
  color: #03a3f3;
  border-radius: 4px;
  text-transform: uppercase;
  background: rgba(3, 163, 243, 0.1);
  padding: 9px 10px;
`;
