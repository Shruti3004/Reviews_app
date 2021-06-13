import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/Header";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} title="ABOUT" />,
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
