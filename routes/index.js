import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Contact: {
    screen: Contact
  }
});

export default createAppContainer(AppNavigator);
