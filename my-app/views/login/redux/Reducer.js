import {
  LOGIN_CHANGE_EDIT_ITEM,
  LOGIN_CHANGE_EDIT_ITEM_SIGNIN,
  LOGIN_CHANGE_TAB,
  LOGIN_SIGNIN_PRESS,
  LOGIN_PRESS,
  LOGIN_SUBMITED,
  LOGIN_SIGNIN_SUBMITED
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
  alert: false,
  isSubmiting: false,
  message: ''
}

const LoginReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_CHANGE_TAB:
      return {
        ...state,
        message: '',
        isSubmiting: false,
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
    case LOGIN_SIGNIN_PRESS:
    case LOGIN_PRESS: 
      return {
        ...state,
        isSubmiting: true
      }
    case LOGIN_SUBMITED:
    case LOGIN_SIGNIN_SUBMITED: 
      return {
        ...state,
        signUp: signUpObj,
        loginForm:loginObj,
        alert: true,
        isSubmiting: false
      }
    default: return state;
  }
}

export default LoginReducer;