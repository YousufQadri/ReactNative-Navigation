import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class Contact extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Contact Component</Text>
        <Button onPress={this.props.navigations.navigate("Home")}>
          Go to Home
        </Button>
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
