import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style.js';
import Drawer from 'react-native-drawer';

const Dashboard = ({navigation}) => {
  const [toggle, setToggle] = useState(false);

  const ContentView = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.tab}>
            <Pressable onPress={() => setToggle(true)}>
              <Image
                source={require('../../assets/icons/menu.png')}
                style={styles.menuIcon}
              />
            </Pressable>
          </View>

          <View style={styles.tab}>
            <Text style={styles.head}>Dashboard</Text>
          </View>

          <View style={styles.tab}>{}</View>
        </View>

        <View style={styles.block}>
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('analytics', {back: 'Dashboard'})
            }>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/analytics.png')}
            />
            <Text>Analytics</Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('customers', {back: 'Dashboard'})
            }>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/analytics.png')}
            />
            <Text>Customers</Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('orders', {back: 'Dashboard'})}>
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
            onPress={() => navigation.navigate('tasks', {back: 'Dashboard'})}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/tasks.png')}
            />
            <Text>Tasks</Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('sales', {back: 'Dashboard'})}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/analytics.png')}
            />
            <Text>Sales</Text>
          </Pressable>
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('products', {back: 'Dashboard'})
            }>
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

  const Menu = () => {
    return (
      <View style={styles.menuContainer}>
        <View style={styles.list}>
          <Pressable
            onPress={() => {
              navigation.navigate('home');
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Home</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('dashboard');
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Dashboard</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('orders', {back: 'Dashboard'});
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Orders</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('notifications');
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Notifications</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('feed');
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Activity</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('welcome');
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Logout</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <Drawer
        open={toggle}
        onClose={() => setToggle(false)}
        type={'overlay'}
        tapToClose={true}
        openDrawerOffset={0.25}
        content={<Menu />}>
        <ContentView />
      </Drawer>
    </>
  );
};

export default Dashboard;
