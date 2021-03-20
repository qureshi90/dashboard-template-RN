import React from 'react';
import {View} from 'react-native';
import styles from './style.js';
import {Calendar} from 'react-native-calendars';

const Cal = () => {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
};

export default Cal;
