import React, {useState} from 'react';
import {View, Text, Pressable, Image, ScrollView} from 'react-native';
import styles from './style.js';

import Drawer from 'react-native-drawer';
import Bezier from '../../components/bezier.js';
// import Orders from '../orders';
// import Header from '../../components/header';
// import Menu from '../../components/sideMenu.js';

const Home = ({navigation, route}) => {
  const [toggle, setToggle] = useState(false);

  const ContentView = props => {
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
            <Text style={styles.head}>Home</Text>
          </View>

          <View style={styles.tab}>{}</View>
        </View>

        <ScrollView>
          <ScrollView
            style={styles.horizontalView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Pressable
              onPress={() => navigation.navigate('analytics', {back: 'Home'})}
              style={styles.card}>
              <Image
                source={require('../../assets/icons/tasks.png')}
                style={styles.tabIcon}
              />
              <Text>Analytics</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('customers', {back: 'Home'})}
              style={styles.card}>
              <Image
                source={require('../../assets/icons/tasks.png')}
                style={styles.tabIcon}
              />
              <Text>Customres</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('orders', {back: 'Home'})}
              style={styles.card}>
              <Image
                source={require('../../assets/icons/tasks.png')}
                style={styles.tabIcon}
              />
              <Text>Orders</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('tasks', {back: 'Home'})}
              style={styles.card}>
              <Image
                source={require('../../assets/icons/tasks.png')}
                style={styles.tabIcon}
              />
              <Text>Tasks</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('sales', {back: 'Home'})}
              style={styles.card}>
              <Image
                source={require('../../assets/icons/tasks.png')}
                style={styles.tabIcon}
              />
              <Text>Sales</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('products', {back: 'Home'})}
              style={styles.card}>
              <Image
                source={require('../../assets/icons/tasks.png')}
                style={styles.tabIcon}
              />
              <Text>Products</Text>
            </Pressable>
          </ScrollView>
          <Text style={styles.heading}>Overview</Text>
          <View>
            <Bezier />
          </View>
          {/* <Text style={styles.heading}>Recent Orders</Text>
          <View>
            <Orders />
          </View> */}
        </ScrollView>
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
              navigation.navigate('orders');
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

export default Home;
