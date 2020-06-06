import {
  changeEdit,
  changeSignUpEdit,
  changeTabIndex
} from './actions/actions';
import {connect} from 'react-redux';
import LoginContainer from './LoginContainer';

const mapStateToProps = (state) => ({
  login: state.login.loginForm,
  signUp: state.login.signUp,
  alert: state.login.alert,
  tabIndex: state.login.tabIndex
});

const mapDispatchToProps = (dispatch) => ({
  changeEdit: (item) => dispatch(changeEdit(item)),
  changeSignUpEdit: (item) => dispatch(changeSignUpEdit(item)),
  changeTabIndex: (index) => dispatch(changeTabIndex(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);