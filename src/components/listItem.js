import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {gray, darkGray} from '../constants/color.js';

const ListItem = props => {
  return (
    <>
      <View style={styles.list}>
        <Text style={styles.key}>{props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: gray,
    padding: 10,
  },
  key: {
    fontSize: 16,
    color: darkGray,
  },
  description: {
    fontSize: 14,
    color: gray,
  },
});

export default ListItem;
