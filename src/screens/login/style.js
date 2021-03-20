import {StyleSheet} from 'react-native';
import {blue, white} from '../../constants/color.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  heading: {
    color: blue,
    fontSize: 30,
    fontWeight: 'bold',
    margin: 15,
  },
  subContainer: {
    flex: 1,
    marginTop: '10%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 30,
    width: '70%',
    paddingLeft: 20,
    paddingVertical: 5,
    marginVertical: 15,
  },
});

export default styles;
