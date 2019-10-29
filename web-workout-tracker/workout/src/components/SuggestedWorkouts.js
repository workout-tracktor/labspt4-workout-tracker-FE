import React from "react";
import styled from "styled-components";
import SuggestedModal from "./SuggestedModal";
import axios from "axios";
import parse from "html-react-parser";

class SuggestedWorkouts extends React.Component {
  state = {
    query: "",
    exercises: [],
    noDuplicates:[],
    arms: false,
    chest: false,
    back: false,
    legs: false,
    shoulders: false,
    abs: false
  };

  dropDown = query => {
    this.setState({
      query: query,
      exercises: [],
      noDuplicates: []
    });

    axios
      .get(
        `https://wger.de/api/v2/exercise/?language=2&category=${this.state.query}&status=2&offset=15`
      )
      .then(res => {
        this.setState({
          exercises: res.data.results
        })

        res.data.results.map((exercise, index) => {
            if(this.state.noDuplicates.some(stateWorkout => stateWorkout.name === exercise.name) ) {
              console.log('same')
            } else {
              if(this.state.noDuplicates.length !== 5){
              this.setState({
                noDuplicates:[ ...this.state.noDuplicates, exercise]
              })} else {
                console.log('Done pulling data')
              }
            }
        })
  }
)}

  render() {
    console.log(this.state.noDuplicates)
    return (
      <Container>
        <CardBody>
          <SuggestedCard
            onClick={ () => { 
              this.setState({arms: !this.state.arms});
              this.dropDown(8) ;
            }}
          >
            <CardText>ARMS</CardText>
          </SuggestedCard>
          {this.state.arms ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({chest: !this.state.chest});
              this.dropDown(11);
            }}
          >
            <CardText>CHEST</CardText>
          </SuggestedCard>
          {this.state.chest ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({back: !this.state.back});
              this.dropDown(12);
            }}
          >
            <CardText>BACK</CardText>
          </SuggestedCard>
          {this.state.back ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({legs: !this.state.legs});
              this.dropDown(9);
            }}
          >
            <CardText>LEGS</CardText>
          </SuggestedCard>
          {this.state.legs ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({shoulders: !this.state.shoulders});
              this.dropDown(13);
            }}
          >
            <CardText>SHOULDERS</CardText>
          </SuggestedCard>
          {this.state.shoulders ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>
        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({abs: !this.state.abs});
              this.dropDown(10);
            }}
          >
            <CardText>ABS</CardText>
          </SuggestedCard>
          {this.state.abs ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
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
`;

const SuggestedCard = styled.summary`
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
`;

const CardText = styled.div`
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 25px;
  color: white;
  text-align: center;
`;
