import React from 'react';
import {ScrollView} from 'react-native';
import styles from './style.js';
import Pie from '../../components/pieChart';

const Analytics = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Pie />
      </ScrollView>
    </>
  );
};

export default Analytics;
