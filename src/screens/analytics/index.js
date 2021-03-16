import React from 'react';
import {ScrollView} from 'react-native';
import styles from './style.js';
import Feed from '../../components/feed.js';

const Analytics = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Feed
          title={'Order Placed'}
          time={'Jul 12, 2018'}
          status={'#3214123'}
        />
      </ScrollView>
    </>
  );
};

export default Analytics;
