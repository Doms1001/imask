// frontend/src/navigation/AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingPage1 from "../screens/LandingPage1";
import LandingPage2 from "../screens/LandingPage2";
import { View, Text } from "react-native";

function Placeholder() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Placeholder Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage1" // ✅ clearer route name
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LandingPage1" component={LandingPage1} />
        <Stack.Screen name="LandingPage2" component={LandingPage2} />
        <Stack.Screen name="Placeholder" component={Placeholder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
