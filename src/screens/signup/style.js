import {StyleSheet} from 'react-native';
import {blue} from '../../constants/color.js';

const styles = StyleSheet.create({
  heading: {
    color: blue,
    fontSize: 30,
    fontWeight: 'bold',
    margin: 15,
  },
  container: {
    flex: 1,
    marginTop: '10%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 30,
    width: '70%',
    height: '7%',
    paddingLeft: 20,
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
