import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class Home extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Component</Text>
        <Button onPress={this.props.navigations.navigate("About")}>
          Go to About
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
export default Home;
