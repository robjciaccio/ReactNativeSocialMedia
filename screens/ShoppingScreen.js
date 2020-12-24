import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const ShoppingScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Shopping Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
})

export default ShoppingScreen
