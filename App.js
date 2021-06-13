import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import Navigator from './routes/homeStack'

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
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}        
        onError={(err) => console.log(err)}
        onFinish={() => setFontsLoaded(true)}
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
