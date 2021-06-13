import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../shared/Card";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details</Text>
      <Card>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
        <Text style={globalStyles.titleText}>{route.params.body}</Text>
        <Text style={globalStyles.titleText}>{route.params.rating}</Text>
      </Card>
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
