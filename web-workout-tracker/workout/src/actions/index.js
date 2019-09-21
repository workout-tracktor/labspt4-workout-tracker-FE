import axios from "axios";
import { dispatch } from "rxjs/internal/observable/pairs";

// ADD goal
export const ADD_GOAL_START = 'ADD_GOAL_START';
export const ADD_GOAL_SUCCESS = 'ADD_GOAL_SUCCESS';
export const ADD_GOAL_FAILURE = 'ADD_GOAL_FAILURE';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';


export const addGoal = newGoal => dispatch => {
  dispatch({ type: ADD_GOAL_START });
  axios
    .post(/*link for the request here,*/ newGoal)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_GOAL_SUCCESS,
        payload: {
          id: res.data[0],
          ...newGoal
        }
      });
    })
    .catch(err => {
      dispatch({ type: ADD_GOAL_FAILURE, payload: err.response });
    });
};

export const addUser = dispatch => {
  axios
  .post('https://workouttrackerprod.herokuapp.com/api/user/register', { withCredentials: true } )
  .then(res => {
    console.log(res);
    dispatch({
      type: ADD_USER_SUCCESS,
      payload: {
        user: res.data
      }
    })
  })
}