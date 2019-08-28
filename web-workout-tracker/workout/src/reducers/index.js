import { 
    /* action imports here */
    ADD_GOAL_START,
    ADD_GOAL_SUCCESS,
    ADD_GOAL_FAILURE
} from '../actions';

const initialState = {
    goal: "",
    savingGoal: false,
    error: ""
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
        default:
            return state;
    }
}

export default reducer;