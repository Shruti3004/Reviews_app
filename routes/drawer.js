import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "../routes/homeStack";
import AboutStack from "../routes/aboutStack";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const defaultNavigationOptions = {
    headerStyle: { backgroundColor: "#111", height: 80 },
    headerTitleStyle: { color: "white", fontWeight: "bold" },
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ ...defaultNavigationOptions }}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
