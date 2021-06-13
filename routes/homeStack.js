import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

function Navigator() {
    const defaultNavigationOptions = {
      headerStyle: { backgroundColor: "#333", height: 80 },
      headerTitleStyle: { color: "white", fontWeight: "bold" },
    };
  return (  
      <Stack.Navigator screenOptions={{ ...defaultNavigationOptions }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />      
      </Stack.Navigator>    
  );
}

export default Navigator;
