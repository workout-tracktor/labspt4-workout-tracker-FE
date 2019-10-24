import React from "react";
import styled from "styled-components";
import axios from "axios";


// show
// query

export default class SuggestedModal extends React.Component {

  getRequest() {
    axios
      .get(
        `https://wger.de/api/v2/exercise/?language=2&exercisecategory=${this.props.query}&status=2&limit=5`
      )
      .then(res => {
        console.log(res.data.results);
      });
  }

  render() {
    console.log(this.props.query);
    if (!this.props.show) {
      return null;
    }
    return <Modal>{this.getRequest()}</Modal>;
  }
}

const Modal = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid white;
`;
