import React from "react";
import styled from "styled-components";
import SuggestedModal from "./SuggestedModal";
import axios from "axios";
import DropdownArrow from '../assets/icons/DropdownArrow.svg'

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
    abs: false,
    min: 1,
    max: 1,
    rotate: false,
    armsOpen: false,
    chestOpen: false,
    backOpen: false,
    legsOpen: false,
    shouldersOpen: false,
    absOpen: false
  };



  dropDown(query, min, max) {
    this.setState({
      query: query,
      exercises: [],
      noDuplicates: [],
      min: min,
      max: max,
      open:false,
      armsOpen: false,
      chestOpen: false,
      backOpen: false,
      legsOpen: false,
      shouldersOpen: false,
      absOpen: false
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
        
        this.setState({
          exercises: res.data.results,
        })


        if(this.state.arms === true){this.setState({armsOpen: true, chestOpen: false, backOpen: false, legsOpen: false, shouldersOpen: false, absOpen: false})}
        if(this.state.chest === true){this.setState({armsOpen: false, chestOpen: true, backOpen: false, legsOpen: false, shouldersOpen: false, absOpen: false})}
        if(this.state.back === true){this.setState({armsOpen: false, chestOpen: false, backOpen: true, legsOpen: false, shouldersOpen: false, absOpen: false})}
        if(this.state.legs === true){this.setState({armsOpen: false, chestOpen: false, backOpen: false, legsOpen: true, shouldersOpen: false, absOpen: false})}
        if(this.state.shoulders === true){this.setState({armsOpen: false, chestOpen: false, backOpen: false, legsOpen: false, shouldersOpen: true, absOpen: false})}
        if(this.state.abs === true){this.setState({armsOpen: false, chestOpen: false, backOpen: false, legsOpen: false, shouldersOpen: false, absOpen: true})}

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
        
      });
  }

  toggle
  render() {
    console.log(this.state.noDuplicates)
    return (
      <Container>
        <CardBody>
        <SuggestedCard
              onClick={() => {
              this.setState({ 
                    arms: !this.state.arms,     
                    chest: false,
                    back: false,
                    legs: false,
                    shoulders: false,
                    abs: false, 
                    });
              this.dropDown(8, 1, 8);
            }}        
            >
          <Arrow
           src = {DropdownArrow}  
            alt = "arrow"
            rotate= {this.state.armsOpen === true? true : null}
            />
            <CardText>ARMS</CardText>
            </SuggestedCard>
          {this.state.arms ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>

        <CardBody>
        <SuggestedCard
              onClick={() => {
              this.setState({ 
                    arms: false,     
                    chest: !this.state.chest,
                    back: false,
                    legs: false,
                    shoulders: false,
                    abs: false, 
                    });
              this.dropDown(11, 1, 6);
            }}        
            >
          <Arrow
           src = {DropdownArrow}  
            alt = "arrow"
            rotate= {this.state.chestOpen === true? true : null}
            />
            <CardText>CHEST</CardText>
          </SuggestedCard>
          {this.state.chest ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>

        <CardBody>
          <SuggestedCard
            onClick={e => {
              this.setState({ 
                    arms: false,     
                    chest: false,
                    back: !this.state.back,
                    legs: false,
                    shoulders: false,
                    abs: false, 
                });
              this.dropDown(12, 1, 7);
            }}
          >
            <Arrow
            src = {DropdownArrow}  
            alt = "arrow"
            rotate= {this.state.backOpen === true? true : null}
            />
            <CardText>BACK</CardText>
          </SuggestedCard>
          {this.state.back ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>

        <CardBody>
        <SuggestedCard
            onClick={e => {
              this.setState({ 
                    arms: false,     
                    chest: false,
                    back: false,
                    legs: !this.state.legs,
                    shoulders: false,
                    abs: false, 
                });
                this.dropDown(9, 1, 8);
            }}
          >
            <Arrow
            src = {DropdownArrow}  
            alt = "arrow"
            rotate= {this.state.legsOpen === true? true : null}
            />
            <CardText>LEGS</CardText>
          </SuggestedCard>
          {this.state.legs ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>

        <CardBody>

        <SuggestedCard
            onClick={e => {
              this.setState({ 
                    arms: false,     
                    chest: false,
                    back: false,
                    legs: false,
                    shoulders: !this.state.shoulders,
                    abs: false, 
                });
                this.dropDown(13, 1, 6);
            }}
          >
            <Arrow
            src = {DropdownArrow}  
            alt = "arrow"
            rotate= {this.state.shouldersOpen === true? true : null}
            />
            <CardText>SHOULDERS</CardText>
          </SuggestedCard>
          {this.state.shoulders ? (
            <SuggestedModal exercises={this.state.noDuplicates} />
          ) : null}
        </CardBody>

        <CardBody>
        <SuggestedCard
            onClick={e => {
              this.setState({ 
                    arms: false,     
                    chest: false,
                    back: false,
                    legs: false,
                    shoulders: false,
                    abs: !this.state.abs, 
                });
                this.dropDown(10, 1, 6);
            }}
          >
            <Arrow
            src = {DropdownArrow}  
            alt = "arrow"
            rotate= {this.state.absOpen === true? true : null}
            />
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

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
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

const SuggestedCard = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 15px;
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
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const CardText = styled.div`
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 24px;
  color: white;
  text-align: left;
`;

const Arrow = styled.img `
    padding: 0 5px;
    float: right;
   transform: rotate(0deg);
   overflow: hidden;
   transition: all 0.3s ease-out;
   transform: ${props => (props.rotate ? `rotate(90deg)` : "")};
    ${'' /* checks to see if props are passed to the css to determine if it will rotate button */}
`
