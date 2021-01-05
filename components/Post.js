import React, { useEffect, useState, useContext } from "react"
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native"
import ProfileCard from "./ProfileCard"
import { Context } from "../Context"
import PhotoPreview from "../screens/PhotoPreview"

const { width } = Dimensions.get("window")

const Post = ({ first_name, last_name, image, posts, navigation }) => {
  const [users, setUsers] = useState([])
  // const [foundPosts, setFoundPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { user_id, handlePreview } = useContext(Context)

  const extraHandlePreview = (image) => {
    navigation.navigate("Preview")
    handlePreview(image)
  }

  return (
    <View style={styles.screen}>
      {posts.map((post, i) => {
        console.log(post.photo)
        return (
          <View key={i} style={styles.postBox}>
            <View>
              <ProfileCard
                first_name={first_name}
                last_name={last_name}
                image={image}
              />
            </View>
            <View>
              <Text style={styles.content}>{post.content}</Text>
            </View>
            <TouchableOpacity onPress={() => extraHandlePreview(post.photo)}>
              <View style={styles.postPhoto}>
                {post.photo ? (
                  <Image source={{ uri: post.photo }} style={styles.photo} />
                ) : null}
              </View>
            </TouchableOpacity>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    // paddingLeft: 29,
  },
  photo: {
    width: width,
    height: 250,
  },
  postBox: {
    marginTop: 10,
  },

  content: {
    paddingLeft: 10,
    // backgroundColor: "pink",

    width: "80%",
    height: 40,
    paddingTop: 17,
    flexDirection: "row",
  },
  postPhoto: {
    alignItems: "center",
  },
})

export default Post
