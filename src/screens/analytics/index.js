import React from 'react';
import {ScrollView} from 'react-native';
import styles from './style.js';
import Pie from '../../components/pieChart';
import Bezier from '../../components/bezier';

const Analytics = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Bezier />
        <Pie />
      </ScrollView>
    </>
  );
};

export default Analytics;
