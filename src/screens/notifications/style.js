import {StyleSheet} from 'react-native';
import {white} from '../../constants/color.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: white,
    borderBottomWidth: 2,
    borderBottomColor: 'cyan',
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
