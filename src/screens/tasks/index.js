import React from 'react';
import {ScrollView} from 'react-native';
import styles from './style.js';
import Item from '../../components/item.js';
import {tasks_data} from '../../constants/dummydata.js';

const Tasks = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        {tasks_data.map((res, index) => {
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

export default Tasks;