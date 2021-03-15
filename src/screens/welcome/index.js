import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';
import ButtonWhite from '../../components/buttonWhite';
import ButtonBlue from '../../components/buttonBlue';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to your dashboard.</Text>
      <ButtonBlue text="Log In" />
      <ButtonWhite text="Sign Up" />
    </View>
  );
};

export default Welcome;
