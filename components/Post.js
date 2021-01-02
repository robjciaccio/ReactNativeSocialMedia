import React, { useEffect, useState, useContext } from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import ProfileCard from "./ProfileCard"
import { Context } from "../Context"

const Post = ({ first_name, last_name, image, posts }) => {
  const [users, setUsers] = useState([])
  // const [foundPosts, setFoundPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { user_id } = useContext(Context)

  return (
    <View style={styles.screen}>
      {posts.map((post, i) => {
        return (
          <View key={i}>
            <ProfileCard
              first_name={first_name}
              last_name={last_name}
              image={image}
            />
            <Text>{post.content}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    position: "relative",
    marginTop: 20,
    paddingLeft: 29,
  },
})

export default Post
