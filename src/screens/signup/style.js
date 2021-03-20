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
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
    height: '100%',
  },
});

export default styles;
