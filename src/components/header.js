import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {blue} from '../constants/color.js';

const Header = props => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});

export default Header;
