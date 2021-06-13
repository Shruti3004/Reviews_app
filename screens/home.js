import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="Review Details" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
