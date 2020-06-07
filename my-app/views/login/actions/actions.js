import {
  LOGIN_CHANGE_EDIT_ITEM,
  LOGIN_CHANGE_EDIT_ITEM_SIGNIN,
  LOGIN_CHANGE_TAB,
  LOGIN_SIGNIN_PRESS,
  LOGIN_PRESS,
  LOGIN_SUBMITED,
  LOGIN_SIGNIN_SUBMITED
} from '../actions/actionTypes';

export const changeEdit = (item) => dispatch => {
  dispatch({
    type: LOGIN_CHANGE_EDIT_ITEM,
    payload: item
  });
}

export const changeSignUpEdit = (item) => dispatch => {
  dispatch({
    type: LOGIN_CHANGE_EDIT_ITEM_SIGNIN,
    payload: item
  });
}

export const changeTabIndex = (tabIndex) => dispatch => {
  dispatch({
    type: LOGIN_CHANGE_TAB,
    payload: tabIndex
  });
}

export const loginUser = (loginForm) => dispatch => {
  dispatch({
    type: LOGIN_PRESS
  });
  const requestInfo = {
    method: 'POST',
    body: JSON.stringify({
        email: loginForm.email,
        passwowrd: loginForm.password
    }),           
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
  };
  //PUT API HERE payload {  email, password }
  fetch('API', requestInfo)
    .then(res => res.text())
    .then(response => {
      dispatch({
        type: LOGIN_SUBMITED,
        payload: response
      })
    }).catch(err => {
      console.log(err)
    })
}

export const singUpUser = (signUpForm) => dispatch => {
  dispatch({
    type: LOGIN_SIGNIN_PRESS
  })
  const requestInfo = {
    method: 'POST',
    body: JSON.stringify({
        name: signUpForm.name,
        email: signUpForm.email,
        passwowrd: signUpForm.password
    }),           
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
};
  //PUT API HERE payload { name, email, password }
  fetch('API', requestInfo)
    .then(res => res.text())
    .then(response => {
      dispatch({
        type: LOGIN_SIGNIN_SUBMITED,
        payload: response
      })
    }).catch(err => {
      console.log(err)
    })
}