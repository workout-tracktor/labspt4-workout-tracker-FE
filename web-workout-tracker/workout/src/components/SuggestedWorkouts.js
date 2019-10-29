import React from "react";
import styled from "styled-components";
import SuggestedModal from "./SuggestedModal";
import axios from "axios";
import parse from "html-react-parser";

class SuggestedWorkouts extends React.Component {
  state = {
    query: "",
    exercises: [],
    arms: false,
    chest: false,
    back: false,
    legs: false,
    shoulders: false,
    abs: false,
    min: 1,
    max: 1
  };

  dropDown(query, min, max) {
    this.setState({
      query: query,
      exercises: [],
      min: min,
      max: max
    });

    function randomOffset(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + 1);
    }
    let page = randomOffset(this.state.min, this.state.max);
    axios
      .get(
        `https://wger.de/api/v2/exercise/?language=2&category=${this.state.query}&status=2&limit=5&page=${page}`
      )
      .then(res => {
        this.setState({ exercises: res.data.results });
      });
  }

  render() {
    return (
      <Container>
        <CardBody>
          <SuggestedCard
            onClick={() => {
              this.setState({ arms: !this.state.arms });
              this.dropDown(8, 1, 5);
            }}
          >
            <CardText>ARMS</CardText>
          </SuggestedCard>
          {this.state.arms ? (
            <SuggestedModal exercises={this.state.exercises} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({ chest: !this.state.chest });
              this.dropDown(11, 1, 5);
            }}
          >
            <CardText>CHEST</CardText>
          </SuggestedCard>
          {this.state.chest ? (
            <SuggestedModal exercises={this.state.exercises} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({ back: !this.state.back });
              this.dropDown(12, 1, 5);
            }}
          >
            <CardText>BACK</CardText>
          </SuggestedCard>
          {this.state.back ? (
            <SuggestedModal exercises={this.state.exercises} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({ legs: !this.state.legs });
              this.dropDown(9, 1, 5);
            }}
          >
            <CardText>LEGS</CardText>
          </SuggestedCard>
          {this.state.legs ? (
            <SuggestedModal exercises={this.state.exercises} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({ shoulders: !this.state.shoulders });
              this.dropDown(13, 1, 5);
            }}
          >
            <CardText>SHOULDERS</CardText>
          </SuggestedCard>
          {this.state.shoulders ? (
            <SuggestedModal exercises={this.state.exercises} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({ abs: !this.state.abs });
              this.dropDown(10, 1, 5);
            }}
          >
            <CardText>ABS</CardText>
          </SuggestedCard>
          {this.state.abs ? (
            <SuggestedModal exercises={this.state.exercises} />
          ) : null}
        </CardBody>
      </Container>
    );
  }
}

export default SuggestedWorkouts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: "space-around";
  width: 600px;
  margin: 0 20px;
  height: 100%;
  @media (max-width: 1040px) {
    width: 100%;
  }
`;

const CardBody = styled.details`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0px 15px 15px 15px;
  height: auto;
  background: radial-gradient(
    360.51px at 64.26% 22.01%,
    #394366 0%,
    #29304a 100%
  );
  border-radius: 16px;
  border: none;
  box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.3);
`;

const SuggestedCard = styled.summary`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 15px;
  margin-left: 30px;
  height: auto;
  background: radial-gradient(
    360.51px at 64.26% 22.01%,
    #394366 0%,
    #29304a 100%
  );
  font-size: 30px;
  color: white;
  border-radius: 16px;
  border: none;
`;

const CardText = styled.div`
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 24px;
  color: white;
  text-align: center;
`;
