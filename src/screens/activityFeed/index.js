import React, {useState} from 'react';
import {View, ScrollView, Text, Image, Pressable} from 'react-native';
import styles from './style.js';
import Feed from '../../components/feed.js';
import Drawer from 'react-native-drawer';

const ActivityFeed = ({navigation}) => {
  const [toggle, setToggle] = useState(false);

  const ContentView = () => {
    return (
      <>
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
            <Text style={styles.head}>Activity Feed</Text>
          </View>

          <View style={styles.tab}>{}</View>
        </View>

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

export default ActivityFeed;
