import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style.js';
// import ButtonBlue from '../../components/buttonBlue';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate('customers', {name: 'dashboard'})}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/analytics.png')}
          />
          <Text>Analytics</Text>
        </Pressable>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate('customer', {name: 'dashboard'})}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/analytics.png')}
          />
          <Text>Customers</Text>
        </Pressable>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate('order', {name: 'dashboard'})}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/tasks.png')}
          />
          <Text>Orders</Text>
        </Pressable>
      </View>

      <View style={styles.block}>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate('task', {name: 'dashboard'})}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/tasks.png')}
          />
          <Text>Tasks</Text>
        </Pressable>
        <Pressable style={styles.card}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/analytics.png')}
          />
          <Text>Sales</Text>
        </Pressable>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate('product', {name: 'dashboard'})}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/analytics.png')}
          />
          <Text>Products</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Dashboard;
