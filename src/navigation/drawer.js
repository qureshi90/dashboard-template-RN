import React from 'react';
import SideMenu from 'react-native-side-menu';
import {View, Text, StyleSheet, Animated} from 'react-native';

const ContentView = () => {
  return (
    <View style={styles.content}>
      <Text>Welcome to React Native!</Text>
      <Text>To get started, edit index.js</Text>
      <Text>Press Cmd+R to reload Cmd+Control+Z for dev menu</Text>
    </View>
  );
};

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Dashboard</Text>
      <Text>Orders</Text>
      <Text>Notifications</Text>
      <Text>Activity</Text>
      <Text>Logout</Text>
    </View>
  );
};

const Application = () => {
  const menu = <Menu navigator={navigator} />;

  return (
    <SideMenu
      menu={menu}
      animationFunction={(prop, value) =>
        Animated.spring(prop, {
          toValue: value,
          friction: 8,
          useNativeDriver: true,
        })
      }>
      <ContentView />
    </SideMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Application;

// import 'react-native-gesture-handler';
// import React from 'react';
// import {View, Text} from 'react-native';
// // import Drawer from 'react-native-drawer';
// // import {NavigationContainer} from '@react-navigation/native';
// // import {createDrawerNavigator} from '@react-navigation/drawer';
// // import Dashboard from '../screens/dashboard';
// // import Orders from '../screens/orders';
// // import Notifications from '../screens/notifications';
// // import ActivityFeed from '../screens/activityFeed';

// // const Drawer = createDrawerNavigator();

// const Burger = () => {
//   return (
//     <>
//       <View>
//         <Text>Hello</Text>
//       </View>
//       {/* <Drawer
//         type="static"
//         content={<Orders />}
//         tapToClose={true}
//         openDrawerOffset={0.2}
//         panCloseMask={0.2}>
//         <Dashboard />
//       </Drawer> */}
//       {/* <NavigationContainer>
//         <Drawer.Navigator initialRouteName="dashboard">
//           <Drawer.Screen name="dashboard" component={Dashboard} />
//           <Drawer.Screen name="orders" component={Orders} />
//           <Drawer.Screen name="notifications" component={Notifications} />
//           <Drawer.Screen name="activityFeed" component={ActivityFeed} />
//         </Drawer.Navigator>
//       </NavigationContainer> */}
//     </>
//   );
// };

// export default Burger;
