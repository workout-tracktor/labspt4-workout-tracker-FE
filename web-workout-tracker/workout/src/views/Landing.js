import React from "react";
import axios from "axios";
import Profile from './Profile'

class Landing extends React.Component {
  state = {};

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

    render(){
        return (
            <>
                <Profile />
            </>
        )
    }
}

export default Landing;
