import {
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
  RESET_ERROR,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT_FAIL,
  USER_SIGNOUT_REQUEST,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../../helpers/constants/authConstants';

export default function userReducer(state, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {...state, loading: true};
    case USER_SIGNIN_SUCCESS:
      return {...state, loading: false};
    case USER_SIGNIN_FAIL:
      return {...state, loading: false, error: action.payload.error};
    case USER_SIGNUP_REQUEST:
      return {...state, loading: true};
    case USER_SIGNUP_SUCCESS:
      return {...state, loading: false};
    case USER_SIGNUP_FAIL:
      return {...state, loading: false, error: action.payload.error};
    case USER_SIGNOUT_REQUEST:
      return {...state, loading: true};
    case USER_SIGNOUT_SUCCESS:
      return {...state, loading: false, user: null};
    case USER_SIGNOUT_FAIL:
      return {...state, loading: false};
    case GET_CURRENT_USER_SUCCESS:
      return {...state, user: action.payload.user};
    case GET_CURRENT_USER_FAIL:
      return {...state, user: null};
    case RESET_ERROR:
      return {...state, error: null};
    default:
      return state;
  }
}
