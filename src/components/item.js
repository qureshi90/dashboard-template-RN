import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {gray, darkGray} from '../constants/color.js';

const Item = props => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.id}>
        <View>
          <Image
            source={require('../assets/images/headshot.jpg')}
            // source={{uri: props.img}}
            style={styles.photo}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.status}>{props.status}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  id: {
    flexDirection: 'row',
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  details: {
    margin: 5,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    color: darkGray,
  },
  description: {
    fontSize: 12,
    color: gray,
  },
  status: {
    margin: 5,
    marginVertical: 15,
    color: gray,
  },
});

export default Item;
