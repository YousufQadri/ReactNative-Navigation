import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconWithBadge from "../icons/IconWithBadge";

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
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName, badge;
        if (routeName === "Home") {
          iconName = "md-home";
          badge = 2;
        } else if (routeName === "About") {
          iconName = `ios-options`;
          badge = 1;
        } else if (routeName === "Contact") {
          iconName = "md-call";
          badge = 4;
        }

        // You can return any component that you like here!
        return (
          <IconWithBadge
            name={iconName}
            size={25}
            color={tintColor}
            badgeCount={badge}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "coral",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
