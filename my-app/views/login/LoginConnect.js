import {
  changeEdit,
  changeSignUpEdit,
  changeTabIndex,
  singUpUser,
  loginUser
} from './actions/actions';
import {connect} from 'react-redux';
import LoginContainer from './LoginContainer';

const mapStateToProps = (state) => ({
  login: state.login.loginForm,
  signUp: state.login.signUp,
  alert: state.login.alert,
  message: state.login.message,
  tabIndex: state.login.tabIndex,
  isSubmiting: state.login.isSubmiting
});

const mapDispatchToProps = (dispatch) => ({
  changeEdit: (item) => dispatch(changeEdit(item)),
  changeSignUpEdit: (item) => dispatch(changeSignUpEdit(item)),
  changeTabIndex: (index) => dispatch(changeTabIndex(index)),
  singUpUser: (signUpForm) => dispatch(singUpUser(signUpForm)),
  loginUser: (loginForm) => dispatch(loginUser(loginForm))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);