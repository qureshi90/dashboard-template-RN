import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';
import ButtonWhite from '../../components/buttonWhite';
import ButtonBlue from '../../components/buttonBlue';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Welcome to your dashboard.</Text>
        <ButtonBlue
          text="Log In"
          onPress={() => navigation.navigate('login')}
        />
        <ButtonWhite
          text="Sign Up"
          onPress={() => navigation.navigate('signup')}
        />
      </View>
    </View>
  );
};

export default Welcome;
