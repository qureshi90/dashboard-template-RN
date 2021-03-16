import React from 'react';
import {ScrollView} from 'react-native';
import styles from './style.js';
import Feed from '../../components/feed.js';

const ActivityFeed = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Feed
          title={'Order Placed'}
          time={'Jul 12, 2018'}
          status={'#3214123'}
        />
        <Feed
          title={'Payment Received'}
          time={'Jul 12, 2018'}
          status={'$198.60'}
        />
        <Feed
          title={'Refund Requested'}
          time={'Jul 12, 2018'}
          status={'$260'}
        />
        <Feed
          title={'Refund Processed'}
          time={'Jul 12, 2018'}
          status={'$260'}
        />
        <Feed
          title={'Customer registration'}
          time={'#7632423  Jul 12, 2018'}
          status={''}
        />
        <Feed
          title={'Order Placed'}
          time={'Jul 12, 2018'}
          status={'#3214123'}
        />
        <Feed
          title={'Payment Received'}
          time={'Jul 12, 2018'}
          status={'$198.60'}
        />
        <Feed
          title={'Refund Requested'}
          time={'Jul 12, 2018'}
          status={'$260'}
        />
        <Feed
          title={'Refund Processed'}
          time={'Jul 12, 2018'}
          status={'$260'}
        />
        <Feed
          title={'Customer registration'}
          time={'#7632423  Jul 12, 2018'}
          status={''}
        />
      </ScrollView>
    </>
  );
};

export default ActivityFeed;
