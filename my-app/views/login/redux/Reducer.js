import {
  LOGIN_CHANGE_EDIT_ITEM,
  LOGIN_CHANGE_EDIT_ITEM_SIGNIN,
  LOGIN_CHANGE_TAB
} from '../actions/actionTypes';

const loginObj = {
  email: '',
  password: ''
}

const signUpObj = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const initialState = {
  loginForm: loginObj,
  signUp: signUpObj,
  tabIndex: 0,
  alert: false
}

const LoginReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_CHANGE_TAB:
      return {
        ...state,
        tabIndex: action.payload
      }
    case LOGIN_CHANGE_EDIT_ITEM:
      return {
        ...state,
        loginForm: action.payload
      }
    case LOGIN_CHANGE_EDIT_ITEM_SIGNIN:
      return {
        ...state,
        signUp: action.payload
      }
    default: return state;
  }
}

export default LoginReducer;