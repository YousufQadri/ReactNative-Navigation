import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class Contact extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Contact Component</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Go to Home"
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
export default Contact;
