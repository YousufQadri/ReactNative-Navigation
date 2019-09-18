import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Component</Text>
        <Button
          onPress={() => this.props.navigation.navigate("About")}
          title="Go to About"
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
export default Home;
