import React from "react";
import styled from "styled-components";
import SuggestedModal from "./SuggestedModal";

class SuggestedWorkouts extends React.Component {
  state = {
    show: false
  };

  showModal = e => {
    if (this.state.show === false) {
      this.setState({
        show: true
      });
    } else {
      this.setState({
        show: false
      });
    }
  };

  render() {
    return (
      <Container>
        <SuggestedCard
          onClick={e => {
            this.showModal();
          }}
        >
          <CardText>ARMS</CardText>
          <SuggestedModal show={this.state.show} />
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal();
          }}
        >
          <CardText>CHEST</CardText>
          <SuggestedModal show={this.state.show} />
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal();
          }}
        >
          <CardText>BACK</CardText>
          <SuggestedModal show={this.state.show} />
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal();
          }}
        >
          <CardText>LEGS</CardText>
          <SuggestedModal show={this.state.show} />
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal();
          }}
        >
          <CardText>SHOULDERS</CardText>
          <SuggestedModal show={this.state.show} />
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal();
          }}
        >
          <CardText>ABS</CardText>
          <SuggestedModal show={this.state.show} />
        </SuggestedCard>
        
      </Container>
    );
  }
}

export default SuggestedWorkouts;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: "space-around";
  width: 600px;
  margin: 0 20px;
  height: 100%;
  @media (max-width: 1040px) {
    width: 100%;
  }
`;

const SuggestedCard = styled.div`
  width: 170px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 30px;
  height: 170px;
  border: 1px solid white;
`;

const CardText = styled.p`
  font-size: 25px;
  color: white;
  text-align: center;
`;
