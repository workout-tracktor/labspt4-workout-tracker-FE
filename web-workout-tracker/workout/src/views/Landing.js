import React from "react";
import axios from "axios";
// import Profile from './Profile'
import InputWorkoutForm from "./InputWorkoutForm";
import Calendar from "react-calendar";

class Landing extends React.Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    axios
      .get("https://workouttrackerprod.herokuapp.com/")
      .then(res => {
        this.setState(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange = date => this.setState({ date });
  render() {
    return (
      <>
        <Calendar onChange={this.onChange} value={this.state.date} />
        {/* {this.state.api} */}
        <InputWorkoutForm />
      </>
    );
  }
}

export default Landing;
