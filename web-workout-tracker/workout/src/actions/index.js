import axios from "axios";

/* REGISTER */
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = (user) => dispatch => {
  dispatch({ type: REGISTER_START});
  // localStorage.removeItem("token");
  return axios
        .post("https://workouttrackerprod.herokuapp.com/api/user/register", user)
        .then(res => {
            // localStorage.setItem('token', res.data.user_id);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data, user: user});
        })
        .catch(err => {
            // if (err.response.status === 403) {
            //     localStorage.removeItem("user_id");
            // }
            dispatch({ type: REGISTER_FAILURE, payload: err.response.message });
        });
}

/* LOGIN */
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (user) => dispatch => {
    dispatch({ type: LOGIN_START});
    // localStorage.removeItem("token");
    // user object should have user_id field in the body
    return axios
        .put("https://workouttrackerprod.herokuapp.com/api/user", user)
        .then(res => {
            console.log(res);
            // localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data, user: user});
        })
        .catch(err => {
            console.log(`ERROR LOGIN: ${err.message}`);
            // if (err.response.status === 403) {
            //     localStorage.removeItem("token");
            // }
            dispatch({ type: LOGIN_FAILURE, payload: err });
        });
}

// @TO-DO: make it update user
// ADD goal
export const ADD_GOAL_START = 'ADD_GOAL_START';
export const ADD_GOAL_SUCCESS = 'ADD_GOAL_SUCCESS';
export const ADD_GOAL_FAILURE = 'ADD_GOAL_FAILURE';


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