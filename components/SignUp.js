import React, { Component, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';


function SignUp ({navigation}){
 const [  name, setName]= useState('');
   const [  email, setEmail]= useState('');
    const [  password, setPassword]= useState('');
    
    
     
  registerUser = () => {
    if(email === '' && password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E"/>
      </View>
      
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
       
        console.log('User registered successfully!')
       
        navigation.navigate('Login')
      }).catch ((error)=>{
        console.log(error.message)
      })
          
    }
  }

  return(
     <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={name}
          onChangeText={(val) => setName(val)}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={password}
          onChangeText={(val) => setPassword(val)}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#FF1809"
          title="Signup"
          onPress={() => this.registerUser()}
        />
        <Text 
          style={styles.signUpText}
          onPress={() => navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>                          
      </View>

  )

}


export default SignUp 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  signUpText: {
    color: '#FF1809',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});