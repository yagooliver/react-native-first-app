import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { StyleSheet, View } from 'react-native';  
import InputText from '../../lib/components/InputText';
import { Container,Text, Button } from 'native-base';

const SignUp = ({
  signUp,
  onChange
}) => {
  const handleChange = (event, name ) => {
    onChange({
      ...signUp,
      [name]: event.nativeEvent.text
    })
  }
  return (
    <Container style={styles.container}>
      <Field 
        type="text" 
        name="name" 
        style={styles.text}
        props={{
          onChange: text => handleChange(text, 'name'),
          placeholder: 'name',
          value: signUp.name
        }}
        component={InputText}/>
      <Field 
        type="text" 
        name="email" 
        style={styles.text}
        props={{
          onChange: text => handleChange(text, 'email'),
          placeholder: 'E-mail',
          value: signUp.email
        }}
        component={InputText}/>
      <Field 
        type="password" 
        name="password" 
        val={signUp.password}
        style={styles.text}
        props={{
          onChange: text => handleChange(text, 'password'),
          placeholder: 'Password',
          secureTextEntry:true
        }}
        component={InputText}/>
      <Field 
        type="password" 
        name="confirmPassword" 
        val={signUp.confirmPassword}
        style={styles.text}
        props={{
          onChange: text => handleChange(text, 'confirmPassword'),
          placeholder: 'Confirm Password',
          secureTextEntry:true
        }}
        component={InputText}/>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button primary style={styles.button}>
          <Text>Sign Up</Text>
        </Button>
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
     form: 'signUp'
  })(SignUp)