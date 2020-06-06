import LoginReducer from '../../../views/login/redux/Reducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  login: LoginReducer
});

export default RootReducer;