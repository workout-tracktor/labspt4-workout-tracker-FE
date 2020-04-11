// src/components/Profile.js

import React, {useEffect, useState} from "react";
import { useAuth0 } from "../components/auth0-wrapper";
import axios from "axios";
import {getBodyGoal} from '../actions'
import { connect } from "react-redux";
import Loading from "../components/Loading"
import styled from "styled-components";

// import {post}
const ValidateUser = (props) => {
  const { user } = useAuth0();
  
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
        password: user.sub,
        units_system: 'metric'
      }

      axios
      //sends GET request to send user backend data to Redux store
      .get(`https://workouttrackerprod.herokuapp.com/api/user?username=${user.nickname}`)
      .then(res => {
        //If successful GET by username, sends to dashboard, and sets the navbar to render
        //correct buttons
        props.newUserToggler(false)
        props.getBodyGoal(res.data)

        localStorage.setItem("user_id", res.data.user_id )
        props.history.push("/Landing")    
      })
      .catch(err => {
        //If failed 404 Not Found nickname, sends to onboarding
        axios.post(`https://workouttrackerprod.herokuapp.com/api/user`, userData)
        .then(res => {
          props.getBodyGoal(res.data)
          localStorage.setItem("user_id", res.data.user_id )
          props.history.push("/onboarding/body-goal" )
          //sets the nav bar to hide certain buttons if new user
          props.newUserToggler(true)
        })
      })
      }
  });
  return (
    <Container>
      <Loading />
    </Container>
  );
};
const mapStateToProps = state => ({
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`

export default connect(
  mapStateToProps, 
  {getBodyGoal}
  )(ValidateUser)
