import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';
// import ButtonBlue from '../../components/buttonBlue';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/analytics.png')}
          />
          <Text>Analytics</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/analytics.png')}
          />
          <Text>Customers</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/tasks.png')}
          />
          <Text>Orders</Text>
        </View>
      </View>

      <View style={styles.block}>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/tasks.png')}
          />
          <Text>Tasks</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/analytics.png')}
          />
          <Text>Sales</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/analytics.png')}
          />
          <Text>Products</Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
