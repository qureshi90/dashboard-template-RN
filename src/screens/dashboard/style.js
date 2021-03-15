import {StyleSheet} from 'react-native';
import {blue} from '../../constants/color.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
    height: '25%',
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: blue,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 70,
    width: 70,
  },
});

export default styles;
