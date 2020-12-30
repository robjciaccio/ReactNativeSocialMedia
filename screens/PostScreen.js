import React, { useLayoutEffect } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import PostForm from "../components/PostForm"

const PostScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title='Cancel' onPress={() => navigation.navigate("Home")} />
      ),

      headerRight: () => (
        <Button
          title='Post     '
          onPress={() => navigation.navigate("Home")}
          style={{ fontWeight: "800" }}
        />
      ),
    })
  }, [navigation])

  return (
    <View style={styles.screen}>
      <PostForm />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    position: "relative",

    justifyContent: "center",
  },
})

export default PostScreen
