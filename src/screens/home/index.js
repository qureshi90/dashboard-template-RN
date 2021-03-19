import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style.js';

import Drawer from 'react-native-drawer';
// import Menu from '../../components/sideMenu.js';

const Home = ({navigation}) => {
  const [toggle, setToggle] = useState(false);

  const ContentView = () => {
    return (
      <View style={styles.content}>
        <Pressable onPress={() => setToggle(true)}>
          <Text>toggle</Text>
        </Pressable>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit index.js</Text>
        <Text>Press Cmd+R to reload Cmd+Control+Z for dev menu</Text>
      </View>
    );
  };

  const Menu = () => {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Pressable
            onPress={() => {
              navigation.navigate('home', {name: 'mmm'});
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Home</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('dashboard', {name: 'mmm'});
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Dashboard</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('orders', {name: 'mmm'});
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Orders</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('notifications', {name: 'mmm'});
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Notifications</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('feed', {name: 'mmm'});
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Activity</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('welcome', {name: 'mmm'});
              setToggle(false);
            }}>
            <Text style={styles.listItem}>Logout</Text>
          </Pressable>
        </View>
        {/* <HomeOutlined /> */}
        {/* <PoweroffOutlined /> */}
        {/* <BellOutlined /> */}
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
