import React from 'react';
import {ScrollView} from 'react-native';
import styles from './style.js';
import Notification from '../../components/notification.js';

const Notifications = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Notification
          type={'CALENDER'}
          description={'Your staff meeting starts in 15 minutes'}
          time={'1 days ago'}
          status={true}
        />
        <Notification
          type={'SALES'}
          description={'An order of $120 has been placed'}
          time={'5 hours ago'}
          status={true}
        />
        <Notification
          type={'RECOMMENDATIONS'}
          description={'New recommendation for John Doe has been been prepared'}
          time={'0 days ago'}
          status={true}
        />
        <Notification
          type={'USERS'}
          description={'A new account has been created'}
          time={'1 days ago'}
          status={true}
        />
        <Notification
          type={'MONITORING'}
          description={
            'Anomaly detected! Your landing page has spiked 10% in page views in thr last hour'
          }
          time={'1 days ago'}
          status={false}
        />
        <Notification
          type={'ALERTS'}
          description={'Your site has been down for 5 minutes'}
          time={'1 days ago'}
          status={true}
        />
      </ScrollView>
    </>
  );
};

export default Notifications;
