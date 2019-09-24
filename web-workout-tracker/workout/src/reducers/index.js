import { 
    /* action imports here */
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ADD_GOAL_START,
    ADD_GOAL_SUCCESS,
    ADD_GOAL_FAILURE
} from '../actions';

const initialState = {
    user: [],
    goal: "",
    savingGoal: false,
    error: "",
    isLoggingIn: false,
    isSigningIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START: {
            return {
                ...state,
                isSigningIn: true
            };
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                isSigningIn: false,
                user: action.payload
            };
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                isSigningIn: false
            };
        }
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggingIn: false,
                credentials: action.payload
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false
            };
        }
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