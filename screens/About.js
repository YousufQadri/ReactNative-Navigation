import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class About extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>About Component</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Contact")}
          title="Go to Contact"
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
export default About;
