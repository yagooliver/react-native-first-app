import {
  LOGIN_CHANGE_EDIT_ITEM,
  LOGIN_CHANGE_EDIT_ITEM_SIGNIN,
  LOGIN_CHANGE_TAB
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