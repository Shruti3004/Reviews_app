import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

function Card({ children }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 4,
    shadowOffset: { width: 0, height: 10 },
    shadowColor: "#000",
    elevation: 6,
    shadowOpacity: 0.44,
    shadowRadius: 2,
  },
  cardContent: {
    marginVertical: 10,
    marginHorizontal: 18,
  },
});
