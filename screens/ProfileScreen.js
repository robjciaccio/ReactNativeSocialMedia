import React, { useContext, useLayoutEffect, useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  _ScrollView,
} from "react-native"
import { Context } from "../Context"
import Post from "../components/Post"
import ProfileCard from "../components/ProfileCard"
import { AppLoading } from "expo-app-loading"

const ProfileScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  const {
    first_name,
    last_name,
    username,
    logOut,
    image,
    user_id,
    ipAdress,
    posts,
    setPosts,

    fetchPosts,
  } = useContext(Context)

  let mappedPosts

  useEffect(() => {
    fetchPosts()
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title='LogOut' onPress={() => logOut()} />,
    })
  }, [navigation])

  return isLoading ? (
    <View style={styles.screen}>
      <ActivityIndicator size='large' color='#00ff00' />
    </View>
  ) : (
    <ScrollView>
      <View>
        <Post
          first_name={first_name}
          last_name={last_name}
          image={image}
          posts={posts}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cirleImage: {
    width: 110,
    height: 110,
    borderRadius: 400 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default ProfileScreen
