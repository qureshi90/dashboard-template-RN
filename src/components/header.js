import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {blue} from '../constants/color.js';

const Header = (props, {route}) => {
  return (
    <View style={styles.header}>
      <View style={styles.item}>
        <Pressable style={styles.press} onPress={props.onPress}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.icon}
          />
          <Text style={styles.backText}>{props.pre}</Text>
        </Pressable>
      </View>

      <View style={styles.item}>
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <View style={styles.item}>{}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'cyan',
    paddingVertical: 5,
  },
  item: {
    width: '33%',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
  },
  press: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 15,
    margin: 5,
    marginLeft: 10,
  },
  backText: {
    fontSize: 18,
    color: blue,
  },
});

export default Header;
