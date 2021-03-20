import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style.js';
import ButtonBlue from '../../components/buttonBlue';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.subContainer}>
        <TextInput style={styles.input} placeholder="E-mail or phone number" />
        <TextInput style={styles.input} placeholder="Password" />
        <ButtonBlue text="Log In" onPress={() => navigation.navigate('home')} />
      </View>
    </View>
  );
};

export default SignIn;
