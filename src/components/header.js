import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
// import {blue} from '../constants/color.js';

const Header = (props, {route}) => {
  return (
    <View style={styles.header}>
      <View style={styles.item}>
        <Pressable onPress={props.onPress}>
          <Image
            source={require('../assets/icons/menu.png')}
            style={styles.icon}
          />
          <Text>Back</Text>
        </Pressable>
      </View>

      <View style={styles.item}>
        <Text>Home</Text>
      </View>

      <View style={styles.item}>{}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  item: {
    width: '33%',
  },
  icon: {
    height: 30,
    width: 30,
    margin: 5,
  },
});

export default Header;
