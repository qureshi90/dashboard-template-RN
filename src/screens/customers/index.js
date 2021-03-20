import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import Header from '../../components/header.js';
import {customers_data} from '../../constants/dummydata.js';

const Customers = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header
        pre={route.params.back}
        title={'Customers'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.subContainer}>
        {customers_data.map((res, index) => {
          return (
            <Item
              key={index}
              name={res.name}
              description={res.description}
              status={res.status}
              onPress={() => navigation.navigate('customer')}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Customers;
