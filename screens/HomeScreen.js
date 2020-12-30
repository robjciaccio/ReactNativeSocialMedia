import React, { useContext } from "react"
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import { Context } from "../Context"
import PostButton from "../components/PostButton"

const HomeScreen = ({ navigation }) => {
  const { first_name } = useContext(Context)

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Post")}>
      <View style={styles.screen}>
        <PostButton />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
})

export default HomeScreen
