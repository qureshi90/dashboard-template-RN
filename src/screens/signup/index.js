import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style.js';
import ButtonBlue from '../../components/buttonBlue';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create new account</Text>
      <View style={styles.subContainer}>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Phone Number" />
        <TextInput style={styles.input} placeholder="E-mail Address" />
        <TextInput style={styles.input} placeholder="Password" />
        <View style={styles.buttonContainer}>
          <ButtonBlue text="Sign Up" />
        </View>
      </View>
    </View>
  );
};

export default SignUp;
