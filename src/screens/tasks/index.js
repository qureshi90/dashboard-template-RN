import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import {tasks_data} from '../../constants/dummydata.js';

const Tasks = ({navigation}) => {
  return (
    <View style={styles.container}>
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
