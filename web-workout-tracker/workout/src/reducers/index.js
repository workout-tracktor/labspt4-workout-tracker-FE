import { 
    /* action imports here */
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    SET_USER_STORE_SUCCESS,
    SET_USER_GOAL_SUCCESS,
    ADD_WORKOUT
} from '../actions';

const initialState = {
    thisUser: [],
    // bodyGoal - is temporary storage, changing with every click. If user submited his choice, bodyGoal should go to thisUser object
    bodyGoal: "",
    updatingUser: false,
    error: "",
    isLoggingIn: false,
    isSigningIn: false,
    workoutData: []
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
                thisUser: action.payload
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
                thisUser: action.payload
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false
            };
        }
        case UPDATE_USER_START:
            return {
                ...state,
                error: "",
                updatingUser: true,
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                updatingUser: false,
                thisUser: action.payload
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                updatingUser: false
            };
        case SET_USER_STORE_SUCCESS:
            return {
                ...state,
                thisUser: action.payload
            };
        case SET_USER_GOAL_SUCCESS:
            return {
                ...state,
                bodyGoal: action.payload
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