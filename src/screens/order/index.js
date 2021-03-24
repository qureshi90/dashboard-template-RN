import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';
import ListItem from '../../components/listItem.js';
import Header from '../../components/header.js';

const Order = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header
        pre={route.params.back}
        title={'Skater Dress 3'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={require('../../assets/images/hood.png')}
        />
      </View>
      <Text style={styles.label}>Skater Dress 3</Text>
      <Text style={styles.details}>Monica Perez - Stripe - #43555 - Aug 3</Text>

      <ListItem name={'Creation Date'} description={'Aug 11'} />
      <ListItem name={'Product Name'} description={'Skater Dress'} />
      <ListItem name={'Customer Name'} description={'Adele Camp'} />
      <ListItem name={'Payment Gateway'} description={'Square'} />
      <ListItem name={'Refund'} description={'No'} />
      <ListItem name={'Receipt Number'} description={'#645644'} />
      <ListItem name={'Final Price'} description={'$260'} />
    </View>
  );
};

export default Order;
