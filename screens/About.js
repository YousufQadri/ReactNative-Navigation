import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class About extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>About Component</Text>
        <Button onPress={this.props.navigations.navigate("Contact")}>
          Go to Contact
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
export default About;
