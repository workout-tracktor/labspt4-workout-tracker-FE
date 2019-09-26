import axios from "axios";

/* REGISTER */
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

//Add workout data to global state
export const ADD_WORKOUT = 'ADD_WORKOUT';

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

/* UPDATE user */
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

// user should have a user_id in the body of the object
export const updateUser = updatedUser => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  axios
    .put("https://workouttrackerprod.herokuapp.com/api/user", updatedUser)
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAILURE, payload: err });
    });
};


export const SET_USER_STORE_SUCCESS = 'SET_USER_STORE_SUCCESS';

export const sendUserData = userData => dispatch => { 
  //sends user data that is pulled from auth0 to redux store
  dispatch({type: SET_USER_STORE_SUCCESS, payload: userData})
}

export const addWorkoutToState = newWorkout  => {
    return {
        type: ADD_WORKOUT,
        payload: newWorkout
    }
}