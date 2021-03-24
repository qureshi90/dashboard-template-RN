import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Menu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Pressable>
          <Text style={styles.listItem}>Home</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('dashboard', {name: 'mmm'})}>
          <Text style={styles.listItem}>Dashboard</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.listItem}>Orders</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.listItem}>Notifications</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.listItem}>Activity</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.listItem}>Logout</Text>
        </Pressable>
      </View>
      {/* <HomeOutlined /> */}
      {/* <PoweroffOutlined /> */}
      {/* <BellOutlined /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  list: {
    marginLeft: 50,
  },
  listItem: {
    marginVertical: 10,
    fontSize: 16,
  },
});

export default Menu;
