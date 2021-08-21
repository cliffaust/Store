import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Shopping from "./src/screen/Shopping";
import Cart from "./src/screen/Cart";
import Payment from "./src/screen/Payment";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Shopping></Shopping> */}
      {/* <Cart></Cart> */}
      <Payment></Payment>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
