import React from "react";
import styled from "styled-components";
import axios from "axios";


// show
// query

export default class SuggestedModal extends React.Component {
  constructor(props){
    super(props)
    this.state={
      query: ''
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.query !== state.query) {
  //     return {query: props.query}
  //   }

  //   // Return null if the state hasn't changed
  //   return null;
  // }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.query !== prevProps.query) {
  //     getRequest()
  //   }
  // }

  componentDidUpdate(prevProps){
    if(prevProps.query !== this.props.query){
        this.setState({          
          query: this.props.query
        });
    }
}

  getRequest() {
    axios
      .get(
        `https://wger.de/api/v2/exercise/?language=2&exercisecategory=${this.state.query}&status=2&limit=5`
      )
      .then(res => {
        console.log(res.data.results);
      });
  }

  render() 
  {
    console.log(this.state.query);
    this.getRequest()
    if (!this.props.show) {
      return null;
    }
    return <Modal></Modal>;
  }
}

const Modal = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid white;
`;
