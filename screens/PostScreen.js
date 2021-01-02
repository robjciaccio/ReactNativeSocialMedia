import React, { useLayoutEffect, useContext, useState } from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { useEffect } from "react/cjs/react.development"
import PhotoCircle from "../components/PhotoCircle"
import { Context } from "../Context"

const PostScreen = ({ navigation }) => {
  const { ipAdress, image, user_id, setPosts, fetchPosts } = useContext(Context)
  const [postText, setPostText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const createPost = async () => {
    let response
    try {
      let formData = new FormData()
      formData.append("content", postText)
      formData.append("userId", user_id)

      response = await fetch(`http://${ipAdress}:4001/posts/new`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: postText,
          userId: user_id,
        }),
      })

      const resData = await response.json()
      console.log(resData)
      setPost((prev) => [...prev, resData])
    } catch (error) {
      console.log(error)
    }

    setPostText("")
    navigation.navigate("Profile")
    fetchPosts()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title='Cancel' onPress={() => navigation.navigate("Home")} />
      ),
    })
  }, [navigation])

  return (
    <View style={styles.screen}>
      <View>
        <PhotoCircle image={image} />
        <TextInput
          style={styles.post}
          placeholder="What's on your mind"
          onChangeText={(text) => setPostText(text)}
          defaultValue={postText}
        />
        <View>
          <Button
            title='create post'
            onPress={async () => await createPost()}
          />
          <Button title='image' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    position: "relative",

    justifyContent: "center",
  },
  post: {
    position: "absolute",
    paddingLeft: 65,
    paddingTop: 17,
  },
})

export default PostScreen
