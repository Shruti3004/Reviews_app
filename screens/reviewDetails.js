import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../shared/Card";
import { globalStyles, images } from "../styles/global";

export default function ReviewDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
        <Text style={globalStyles.titleText}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>Gamezone Rating:</Text>
          <Image source={images.ratings[route.params.rating]} />
        </View>
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
  rating: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  ratingText: {
    fontFamily: "font-demi",
    fontSize: 18,
  },
});
