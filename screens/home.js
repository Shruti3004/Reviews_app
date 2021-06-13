import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Card from "../shared/Card";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const pressHandler = () => {
    navigation.navigate("About");
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={openModal} animationType="slide">
        <MaterialIcons
          name="close"
          size={28}
          color="#333"
          onPress={() => setOpenModal(false)}
          style={{ ...styles.icon, ...styles.closeIcon }}
        />
        <View>
          <Text>Shruti GAarwal you are best</Text>
        </View>
      </Modal>
      <MaterialIcons
        name="add"
        size={28}
        color="#333"
        onPress={() => setOpenModal(true)}
        style={styles.icon}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Button title="Review Details" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    borderStyle: "dashed",
    marginBottom: 10,
  },
  closeIcon: {
    marginTop: 20,
  },
});
