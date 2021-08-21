import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Shopping from "./src/screen/Shopping";
import Cart from "./src/screen/Cart";
import Payment from "./src/screen/Payment";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "white",
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name="shopping" component={Shopping} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
