import React from "react";
import styled from "styled-components";

export default class SuggestedModal extends React.Component {
    render() {
        if(!this.props.show){
            return null;
        }
      return <Modal>Hello Modal</Modal>;
    }
  }

const Modal = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid white;
`;
