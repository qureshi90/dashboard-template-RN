import {StyleSheet} from 'react-native';
import {gray, darkGray, white} from '../../constants/color.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  photo: {
    width: 150,
    height: 150,
  },
  photoContainer: {
    margin: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    margin: 10,
    color: darkGray,
  },
  details: {
    margin: 10,
    color: gray,
  },
});

export default styles;
