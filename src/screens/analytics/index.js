import React from 'react';
import {ScrollView} from 'react-native';
import styles from './style.js';
import Pie from '../../components/pieChart';
import Bezier from '../../components/bezier';
import Bar from '../../components/barChart';

const Analytics = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Bezier />
        <Pie />
        <Bar />
      </ScrollView>
    </>
  );
};

export default Analytics;
