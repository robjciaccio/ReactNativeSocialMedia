import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

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
