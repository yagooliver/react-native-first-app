import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { StyleSheet, View } from 'react-native';  
import InputText from '../../lib/components/InputText';
import { Container,Text, Button,Spinner } from 'native-base';

const Login = ({
  login,
  onChangeLogin,
  isSubmiting,
  onSubmit
}) => {
  const handleChangeEmail = (text) => {
    onChangeLogin({
       ...login,
       email: text.nativeEvent.text
    });
  }

  const handleChangePassword = (text) => {
    onChangeLogin({
       ...login,
       password: text.nativeEvent.text
    });
  }

  const handleSubmit = () => {
    onSubmit(login);
  }

  return (
    <Container style={styles.container}>
      <Field 
        type="text" 
        name="email" 
        style={styles.text}
        props={{
          onChange: text => handleChangeEmail(text),
          placeholder: 'E-mail',
          value: login.email
        }}
        component={InputText}/>
      <Field 
        type="password" 
        name="password" 
        val={login.password}
        style={styles.text}
        props={{
          onChange: text => handleChangePassword(text),
          placeholder: 'Password',
          secureTextEntry:true
        }}
        component={InputText}/>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isSubmiting ? <Spinner color="blue"/>
        : <Button primary style={styles.button} onPress={handleSubmit}><Text>Login</Text></Button>}
      </View>
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    width: '90%',
    borderStyle: 'solid',
    borderWidth: 0.1,
    backgroundColor: 'rgba(255,255, 255, 0.5)',
  },
  button: {
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 10,
    width: '50%',
    opacity: 0.7,
    borderRadius: 20
  }
})
export default reduxForm({
   form: 'login'
})(Login)