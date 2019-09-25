import {
    /* action imports here */
    ADD_GOAL_START,
    ADD_GOAL_SUCCESS,
    ADD_GOAL_FAILURE,
    ADD_USER_SUCCESS,
    ADD_WORKOUT
} from '../actions';

const initialState = {
    goal: "",
    savingGoal: false,
    error: "",
    workoutData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOAL_START:
            return {
                ...state,
                error: "",
                savingGoal: true,
            }
        case ADD_GOAL_SUCCESS:
            return {
                ...state,
                savingGoal: false,
                goal: action.payload
            };
        case ADD_GOAL_FAILURE:
            return {
                ...state,
                error: action.payload,
                savingGoal: false
            };
        case ADD_USER_SUCCESS:
            return {
                user: action.payload
            }
            
        case ADD_WORKOUT:
            console.log(state.workoutData);
            return {
                ...state,
                workoutData: [...state.workoutData, action.payload]
            }
        default:
            return state;

    }
}


export default reducer;