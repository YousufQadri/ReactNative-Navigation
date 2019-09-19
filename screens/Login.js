import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Log In"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Login;
