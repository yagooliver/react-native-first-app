import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Login from './Login';
import SignUp from './SignUp';
import {Container,Card,  Tab, Tabs, ScrollableTab} from 'native-base';

class LoginContainer extends Component{
  componentDidMount(){
    
  }
  render() {
    return (
      <View style={styles.container}>
       <Image source={require("../../assets/images/background.jpeg")} style={styles.image}>
       </Image>
       <Text>Login</Text>
       <Container style={styles.container2}>
         <Tabs 
          tabBarPosition="top" 
          page={this.props.tabIndex} 
          onChangeTab={({i}) => this.props.changeTabIndex(i)} 
          renderTabBar={() => <ScrollableTab underlineStyle={styles.tabUnderline} style={{backgroundColor:'rgba(0,0,0,0)'}} tabsContainerStyle={{width: 300, backgroundColor: 'rgba(0,0,0,0)'}}/>}
          onScroll={({i}) => this.props.changeTabIndex(i)}>
          <Tab 
            heading="Login" 
            style={styles.tab} 
            textStyle={styles.tabText}
            tabStyle={styles.tab}
            activeTabStyle={styles.active}>
            <Login 
              login={this.props.login} 
              isSubmiting={this.props.isSubmiting}
              onSubmit={this.props.loginUser}
              onChangeLogin={this.props.changeEdit}/>
          </Tab >
          <Tab 
            heading="Sign Up" 
            style={styles.tab} 
            textStyle={styles.tabText}
            activeTabStyle={styles.active} 
            tabStyle={styles.tab}>
            <SignUp
              signUp={this.props.signUp}
              onSubmit={this.props.singUpUser}
              isSubmiting={this.props.isSubmiting}
              onChange={this.props.changeSignUpEdit}
            />
          </Tab>
         </Tabs>         
       </Container>
       </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 1)'
  },
  container2: {
    width: 300,
    height: 500,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  header: {
    opacity: 0
  },
  tabUnderline: {
    backgroundColor: 'white',
    width: 30,
    borderRadius: 30,
    height: 30,
    marginLeft: 30,
    marginBottom: -25,

    
  },
  tab: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  tabText: {
    color: 'gray',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  text: {
    backgroundColor: 'red',
  },
  heading: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  active: {
    borderRadius: 300,
    borderStyle: 'solid',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  image: {
    flex: 1,
    width: '100%', height: '100%',
    resizeMode: "cover",
    position: 'relative',
    left: 0,
    top: 0,
  }
});


export default LoginContainer;