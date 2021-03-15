import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style.js';
import ButtonBlue from '../../components/buttonBlue';

const SignIn = () => {
  return (
    <>
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="E-mail or phone number" />
        <TextInput style={styles.input} placeholder="Password" />
        <ButtonBlue text="Log In" />
      </View>
    </>
  );
};

export default SignIn;
