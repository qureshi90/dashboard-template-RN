import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';

const Customers = () => {
  return (
    <View style={styles.container}>
      <Item
        name={'John Doe 1'}
        description={'iphone - Total Spend $1'}
        status={'Created Jul 1'}
      />
      <Item
        name={'John Doe 2'}
        description={'iphone - Total Spend $2'}
        status={'Created Jul 2'}
      />
      <Item
        name={'John Doe 1'}
        description={'iphone - Total Spend $1'}
        status={'Created Jul 1'}
      />
      <Item
        name={'John Doe 2'}
        description={'iphone - Total Spend $2'}
        status={'Created Jul 2'}
      />
      <Item
        name={'John Doe 1'}
        description={'iphone - Total Spend $1'}
        status={'Created Jul 1'}
      />
      <Item
        name={'John Doe 2'}
        description={'iphone - Total Spend $2'}
        status={'Created Jul 2'}
      />
    </View>
  );
};

export default Customers;
