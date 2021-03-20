import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import Header from '../../components/header.js';
import {tasks_data} from '../../constants/dummydata.js';

const Tasks = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header
        pre={route.params.back}
        title={'Tasks'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.scrollContainer}>
        {tasks_data.map((res, index) => {
          return (
            <Item
              key={index}
              name={res.name}
              description={res.description}
              status={res.status}
              onPress={() => navigation.navigate('task')}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Tasks;
