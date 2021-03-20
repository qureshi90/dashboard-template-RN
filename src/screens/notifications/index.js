import React, {useState} from 'react';
import {View, ScrollView, Text, Pressable, Image} from 'react-native';
import styles from './style.js';
import Notification from '../../components/notification.js';
import Drawer from 'react-native-drawer';

const Notifications = ({navigation}) => {
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
            <Text style={styles.head}>Notifications</Text>
          </View>
          <View style={styles.tab}>{}</View>
        </View>

        <ScrollView>
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
            description={
              'New recommendation for John Doe has been been prepared'
            }
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

export default Notifications;
