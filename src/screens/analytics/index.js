import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style.js';
import Pie from '../../components/pieChart';
import Bezier from '../../components/bezier';
import Bar from '../../components/barChart';
import Header from '../../components/header.js';

const Analytics = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header
        pre={route.params.back}
        title={'Analytics'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.subContainer}>
        <Bezier />
        <Pie />
        <Bar />
      </ScrollView>
    </View>
  );
};

export default Analytics;
