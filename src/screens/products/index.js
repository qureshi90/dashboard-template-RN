import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import {products_data} from '../../constants/dummydata.js';

const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {products_data.map((res, index) => {
          return (
            <Item
              key={index}
              name={res.name}
              description={res.description}
              status={res.status}
              onPress={() => navigation.navigate('product', {name: 'products'})}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Products;
