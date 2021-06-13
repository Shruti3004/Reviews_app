import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/Header";

const Stack = createStackNavigator();

function Navigator() {
    const defaultNavigationOptions = {
      headerStyle: { backgroundColor: "#333", height: 80 },
      headerTitleStyle: { color: "white", fontWeight: "bold" },
    };
  return (
    // <Stack.Navigator screenOptions={{ ...defaultNavigationOptions }}>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title="HOME" />,
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        headerTitleAlign="center"
      />
    </Stack.Navigator>
  );
}

export default Navigator;
