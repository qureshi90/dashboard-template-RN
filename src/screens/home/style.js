import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  horizontalView: {
    padding: 5,
  },
  card: {
    margin: 10,
    alignItems: 'center',
  },
  tabIcon: {
    height: 50,
    width: 50,
  },
  heading: {
    fontSize: 20,
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
