import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {gray, darkGray} from '../constants/color.js';

const Feed = props => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.details}>
        <View style={styles.dotContainer}>
          <View style={styles.dot} />
        </View>

        <View style={styles.data}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
      </View>

      <View style={styles.statusContainer}>
        <Text
          style={props.status.includes('$') ? styles.statusB : styles.statusG}>
          {props.status}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'row',
  },
  data: {
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    color: darkGray,
  },
  time: {
    fontSize: 13,
    color: gray,
  },
  dotContainer: {
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: '#FF8B24',
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  statusContainer: {
    justifyContent: 'center',
  },
  statusG: {
    color: gray,
  },
  statusB: {
    color: 'blue',
  },
});

export default Feed;
