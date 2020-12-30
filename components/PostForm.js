import React, { useState, useContext } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import PhotoCircle from "./PhotoCircle"
import { Context } from "../Context"

const PostForm = () => {
  const { first_name, last_name, image } = useContext(Context)
  const [postText, setPostText] = useState()

  return (
    <View>
      <PhotoCircle image={image} />
      <TextInput
        style={styles.post}
        placeholder="What's on your mind"
        onChangeText={(text) => setPostText(text)}
        defaultValue={postText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    position: "absolute",
    paddingLeft: 65,
    paddingTop: 17,
  },
})

export default PostForm
