import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {gray, darkGray} from '../constants/color.js';

const Notification = props => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.id}>
        <View style={styles.photoContainer}>
          <Image
            source={require('../assets/icons/user.png')}
            // source={{uri: props.img}}
            style={styles.photo}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.type}>{props.type}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
      </View>

      <View style={styles.statusContainer}>
        <View style={props.status === true ? styles.status : ''} />
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
    borderBottomWidth: 1,
    borderColor: gray,
  },
  id: {
    flexDirection: 'row',
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 40,
    width: 40,
  },
  details: {
    marginLeft: 20,
    width: '80%',
  },
  type: {
    fontSize: 14,
    color: gray,
  },
  description: {
    fontSize: 14,
    color: darkGray,
  },
  time: {
    fontSize: 13,
    color: gray,
  },
  statusContainer: {
    justifyContent: 'center',
  },
  status: {
    backgroundColor: '#FF8B24',
    height: 12,
    width: 12,
    borderRadius: 6,
  },
});

export default Notification;
