import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';
import ListItem from '../../components/listItem.js';

const Customer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={require('../../assets/images/headshot.jpg')}
        />
      </View>
      <Text style={styles.label}>John Doe 1</Text>
      <Text style={styles.details}>iPhone - Total Spend $1</Text>

      <ListItem name={'Name'} description={'John Doe'} />
      <ListItem name={'Email'} description={'jdoe@gmail.com'} />
      <ListItem name={'Account Created'} description={'Jul 12, 2018'} />
      <ListItem name={'Total Spend'} description={'$259'} />
      <ListItem name={'Total Orders'} description={'2'} />
    </View>
  );
};

export default Customer;
