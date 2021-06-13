import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    
      <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
        <MaterialIcons
          name="menu"
          size={28}
          color="black"
          onPress={openMenu}
          style={styles.icon}
        />
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </ImageBackground>
    
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#333",
    fontWeight: "bold",
    fontFamily: "font-bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 5,
  },
});
