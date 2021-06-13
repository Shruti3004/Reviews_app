import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const Stack = createStackNavigator();

function Navigator() {
  const defaultNavigationOptions = {
    headerStyle: { backgroundColor: "#333", height: 80 },
    headerTitleStyle: { color: "white", fontWeight: "bold" },
  };
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavigationOptions }}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export default Navigator;
