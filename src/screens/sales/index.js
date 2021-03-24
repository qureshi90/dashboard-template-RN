import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import Header from '../../components/header.js';
import {sales_data} from '../../constants/dummydata.js';

const Sales = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header
        pre={route.params.back}
        title={'Sales'}
        onPress={() => navigation.goBack()}
      />
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
