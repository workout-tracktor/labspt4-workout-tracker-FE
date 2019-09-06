import React from "react";
import axios from "axios";
// import Profile from './Profile'

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

<<<<<<< HEAD
    render(){
        return (
            <>
                <Profile />
            </>
        )
    }
=======
  render() {
    return (
      <>
        {this.state.api}
        {/* <Profile /> */}
      </>
    );
  }
>>>>>>> 3467c5d95f6f523608776525304c27c3760ac330
}

export default Landing;
