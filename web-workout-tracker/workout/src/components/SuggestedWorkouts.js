import React from "react";
import styled from "styled-components";
import SuggestedModal from "./SuggestedModal";

class SuggestedWorkouts extends React.Component {
  state = {
    show: false,
    query: ""
  };

  showModal = query => {
    if (this.state.show === false) {
      this.setState({
        show: true,
        query: query
      });
    } else {
      this.setState({
        show: false,
        query: query
      });
    }
  };

  render() {
    return (
      <Container>
        <SuggestedCard
          onClick={e => {
            this.showModal(8);
          }}
        >
          <CardText>ARMS</CardText>
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal(11);
          }}
        >
          <CardText>CHEST</CardText>
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal(12);
          }}
        >
          <CardText>BACK</CardText>
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal(9);
          }}
        >
          <CardText>LEGS</CardText>
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal(13);
          }}
        >
          <CardText>SHOULDERS</CardText>
        </SuggestedCard>
        <SuggestedCard
          onClick={e => {
            this.showModal(10);
          }}
        >
          <CardText>ABS</CardText>
        </SuggestedCard>
        <SuggestedModal show={this.state.show} query={this.state.query} />
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
