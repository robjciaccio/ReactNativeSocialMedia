import React, { useLayoutEffect, useContext, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native"
import { useEffect } from "react/cjs/react.development"
import PhotoCircle from "../components/PhotoCircle"
import { Context } from "../Context"
import * as ImagePicker from "expo-image-picker"

const PostScreen = ({ navigation }) => {
  const {
    ipAdress,
    image,
    user_id,
    setPosts,
    fetchPosts,
    fetchAllPosts,
  } = useContext(Context)
  const [postText, setPostText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [postImage, setPostImage] = useState("")

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!")
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)
    result ? setPostImage(result) : setPostImage(null)
  }

  const createPost = async () => {
    setIsLoading(true)
    // if (postImage) {
    let localUri = postImage.uri
    let filename = await localUri.split("/").pop()

    let match = /\.(\w+)$/.exec(filename)
    let type = match ? `image/${match[1]}` : `image`
    // }
    let response
    try {
      let formData = new FormData()
      formData.append("image", { uri: localUri, name: filename })
      formData.append("content", postText)
      formData.append("userId", user_id)
      formData.append("photoUri", postImage.uri)
      console.log(formData)

      response = await fetch(`http://${ipAdress}:4001/posts/new`, {
        method: "POST",
        body: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      })

      const resData = await response.json()
    } catch (error) {
      console.log(error)
    }

    setPostText("")
    setIsLoading(false)
    setPostImage(null)
    navigation.navigate("Profile")
    fetchPosts()
    fetchAllPosts()
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title='Cancel' onPress={() => navigation.navigate("Home")} />
      ),
    })
  }, [navigation])

  return isLoading ? (
    <View style={styles.screen}>
      <ActivityIndicator size='large' color='#00ff00' />
    </View>
  ) : (
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
          <Button title='image' onPress={() => pickImage()} />
        </View>
        <View>
          {postImage ? (
            <View style={{ alignItems: "center" }}>
              <Image
                source={{ uri: postImage.uri }}
                style={styles.cirleImage}
              />
            </View>
          ) : null}
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
  cirleImage: {
    width: "80%",
    height: "80%",
    position: "relative",
  },
})

export default PostScreen
