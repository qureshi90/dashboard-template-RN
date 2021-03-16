import React from 'react';
import {ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import {sales_data} from '../../constants/dummydata.js';

const Sales = () => {
  return (
    <>
      <ScrollView style={styles.container}>
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
    </>
  );
};

export default Sales;
