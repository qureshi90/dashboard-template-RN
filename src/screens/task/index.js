import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';
import ListItem from '../../components/listItem.js';
import Header from '../../components/header.js';

const Task = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header
        pre={route.params.back}
        title={'Publish new...'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={require('../../assets/images/hood.png')}
        />
      </View>
      <Text style={styles.label}>Publish new product page 1</Text>
      <Text style={styles.details}>Due Date: Jul 1</Text>

      <ListItem
        name={'Title'}
        description={'Launch iPhone app for Dashboard'}
      />
      <ListItem name={'Status'} description={'In Progress'} />
      <ListItem name={'Creation Date'} description={'Aug 14, 2018'} />
      <ListItem name={'Priority'} description={'High'} />
      <ListItem name={'Difficulty'} description={'2'} />
      <ListItem name={'Due Date'} description={'Aug 29, 2018'} />
    </View>
  );
};

export default Task;
