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
    UPDATE_USER_FAILURE
} from '../actions';

const initialState = {
    user: [],
    updatingUser: false,
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
                user: action.payload
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
                user: action.payload
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                updatingUser: false
            };
        default:
            return state;
    }
}

export default reducer;