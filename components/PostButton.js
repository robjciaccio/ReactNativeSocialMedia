import React, { useState, useContext } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import PhotoCircle from "./PhotoCircle"
import { Context } from "../Context"

const PostButton = () => {
  const { first_name, last_name, image } = useContext(Context)

  return (
    <View style={{ width: "100%" }}>
      <PhotoCircle image={image} />
      <Text style={styles.post}>What's on your mind</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    position: "absolute",
    paddingLeft: 65,
    paddingTop: 17,
    fontWeight: "100",
    width: "100%",
  },
})

export default PostButton
