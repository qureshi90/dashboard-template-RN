import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {blue} from '../constants/color.js';

const ButtonWhite = props => {
  return (
    <>
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    height: '7%',
    width: '70%',
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: blue,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: blue,
    textAlign: 'center',
  },
});

export default ButtonWhite;
