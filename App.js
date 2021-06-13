import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    "font-bold": require("./assets/fonts/AvenirNextLTPro-Bold.otf"),
    "font-demi": require("./assets/fonts/AvenirNextLTPro-Demi.otf"),
    "font-medium": require("./assets/fonts/AvenirNextLTPro-Medium.otf"),
    "font-regular": require("./assets/fonts/AvenirNextLTPro-Regular.otf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts()}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
