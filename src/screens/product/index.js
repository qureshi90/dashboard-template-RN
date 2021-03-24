import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';
import ListItem from '../../components/listItem.js';
import Header from '../../components/header.js';

const Product = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header
        pre={route.params.back}
        title={'Zapatos show'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={require('../../assets/images/hood.png')}
        />
      </View>
      <Text style={styles.label}>Zapatos shows1</Text>
      <Text style={styles.details}>The Black 9 Shoes look 1</Text>

      <ListItem name={'Name'} description={'Adidas Sweatshirt'} />
      <ListItem name={'Items Sold'} description={'432 items'} />
      <ListItem name={'Tags'} description={'sports, running, discount'} />
      <ListItem name={'Categories'} description={'Clothes, Sport'} />
      <ListItem name={'Price'} description={'$169.00'} />
      <ListItem name={'SKU'} description={''} />
      <ListItem name={'Tas Status'} description={'taxable'} />
      <ListItem name={'Tax Class'} description={'2'} />
    </View>
  );
};

export default Product;
