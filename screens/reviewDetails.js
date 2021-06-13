import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details</Text>
      <Text style={globalStyles.titleText}>{route.params.title}</Text>
      <Text style={globalStyles.titleText}>{route.params.body}</Text>
      <Text style={globalStyles.titleText}>{route.params.rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
