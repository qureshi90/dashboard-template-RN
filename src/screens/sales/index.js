import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import {sales_data} from '../../constants/dummydata.js';

const Sales = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {sales_data.map((res, index) => {
          return (
            <Item
              key={index}
              name={res.name}
              description={res.description}
              status={res.status}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Sales;
