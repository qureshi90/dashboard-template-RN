import React from 'react';
import {ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import {orders_data} from '../../constants/dummydata.js';

const Orders = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        {orders_data.map((res, index) => {
          return (
            <Item
              key={index}
              name={res.name}
              description={res.description}
              status={res.status}
              onPress={() => navigation.navigate('order', {name: 'orders'})}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default Orders;
