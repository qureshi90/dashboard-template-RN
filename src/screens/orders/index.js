import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import Header from '../../components/header.js';
import {orders_data} from '../../constants/dummydata.js';

const Orders = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header
        // pre={route.params.back}
        title={'Orders'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.scrollContainer}>
        {orders_data.map((res, index) => {
          return (
            <Item
              key={index}
              name={res.name}
              description={res.description}
              status={res.status}
              onPress={() => navigation.navigate('order')}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Orders;
