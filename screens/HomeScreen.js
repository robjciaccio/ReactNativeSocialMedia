import React, { useContext } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { Context } from "../Context"

const HomeScreen = ({ navigation }) => {
  const { first_name } = useContext(Context)

  return (
    <View style={styles.screen}>
      <Text>{`${first_name}'s home page`}</Text>
      <Button
        title='go to Profile'
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
})

export default HomeScreen
