// src/components/Profile.js

import React, {useEffect, useState} from "react";
import { useAuth0 } from "../components/auth0-wrapper";
import axios from "axios";
import {getBodyGoal} from '../actions'
import { connect } from "react-redux";

// import {post}
const ValidateUser = (props) => {
  const { loading, user } = useAuth0();
  
  useEffect(() => {
    // Update the document title using the browser API

    if(user === undefined){
       props.history.push("/Landing")    
    } else {
      const userData = {
        first_name: user.given_name,
        last_name: user.family_name,
        username: user.nickname,
        email: user.email,
        avatar: user.picture,
        password: user.sub
      }

      axios
      //sends GET request to send user backend data to Redux store
      .get(`https://workouttrackerprod.herokuapp.com/api/user?username=${user.nickname}`)
      .then(res => {
        //If successful GET by username, sends to dashboard
        console.log(res)
        props.getBodyGoal(res.data)
        localStorage.setItem("user_id", res.data.user_id )
        props.history.push("/Landing")    
      })
      .catch(err => {
        //If failed 404 Not Found nickname, sends to onboarding
        // props.isRegistered()
        axios.post(`https://workouttrackerprod.herokuapp.com/api/user`, userData)
        .then(res => {
          props.getBodyGoal(res.data)
          localStorage.setItem("user_id", res.data.user_id )
          props.history.push("/onboarding/body-goal" )
        })
      })
      }
  });
  return (
    <>
    </>
  );
};
const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps, 
  {getBodyGoal}
  )(ValidateUser)