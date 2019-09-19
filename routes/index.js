import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

//STACK Navigator

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: Home
//   },
//   About: {
//     screen: About
//   },
//   Contact: {
//     screen: Contact
//   }
// });

// export default createAppContainer(AppNavigator);

//TAB Navigator

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    About: {
      screen: About
    },
    Contact: {
      screen: Contact
    }
  },
  {}
);

export default createAppContainer(TabNavigator);
