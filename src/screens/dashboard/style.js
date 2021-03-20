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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  menuContainer: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  list: {
    marginLeft: 50,
  },
  listItem: {
    marginVertical: 10,
    fontSize: 16,
  },
  menuIcon: {
    height: 20,
    width: 20,
    margin: 10,
  },
  tab: {
    width: '30%',
  },
  head: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;
