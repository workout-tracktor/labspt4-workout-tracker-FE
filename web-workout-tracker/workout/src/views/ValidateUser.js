// src/components/Profile.js

import React, {useEffect, useState} from "react";
import { useAuth0 } from "../components/auth0-wrapper";
import axios from "axios";

const ValidateUser = (props) => {
  const { loading, user } = useAuth0();
  
  useEffect(() => {
    // Update the document title using the browser API
    axios
      //sends GET request to backend to retrieve user information by username,
      .get(`https://workouttrackerprod.herokuapp.com/api/user?username=${user.nickname}`)
      .then(res => {
        //If successful GET by username, sends to dashboard
        localStorage.setItem("user_id", res.data.user_id )
        props.history.push("/Landing")    
      })
      .catch(err => {
        //If failed 404 Not Found nickname, sends to onboarding
        props.history.push("/onboarding/body-goal")
      });
  });
  return (
    <>
    </>
  );
};

export default ValidateUser;
