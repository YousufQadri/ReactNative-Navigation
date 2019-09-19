import React from "react";
import { Text, View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const IconWithBadge = props => {
  const { name, size, color, badgeCount } = props;
  return (
    <View>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // If you're using react-native < 0.57 overflow outside of parent
            // will not work on Android, see https://git.io/fhLJ8
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "red",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
};

export default IconWithBadge;
