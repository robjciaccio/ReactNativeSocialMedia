import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
} from "react-native"
import { Context } from "../Context"
import PostButton from "../components/PostButton"
import ProfileCard from "../components/ProfileCard"
import Post from "../components/Post"
import Interaction from "../components/Interaction"

const { width } = Dimensions.get("window")

const HomeScreen = ({ navigation }) => {
  const {
    user_id,
    ipAdress,
    fetchAllPosts,
    allPosts,
    fetchAllUsers,
    allUsers,
    fetchLikes,
    likes,
  } = useContext(Context)

  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  useEffect(() => {
    fetchAllPosts()
    fetchLikes()
    fetchAllUsers()
  }, [])

  let foundUser
  let foundLikes

  return isLoading ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Post")}>
          <View style={styles.screen}>
            <PostButton />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {allPosts.map((post, i) => {
          foundUser = allUsers.find((user) => user.id == post.user_id)
          foundLikes = likes.filter((like) => like.post_id == post.id)

          return (
            <View key={i} style={styles.postBox}>
              <View>
                <ProfileCard
                  first_name={foundUser.first_name}
                  last_name={foundUser.last_name}
                  image={foundUser.profile_photo}
                />
              </View>
              <View style={styles.shade}>
                <View>
                  <Text style={styles.content}>{post.content}</Text>
                </View>
                <View>
                  <View style={styles.postPhoto}>
                    {post.photo ? (
                      <Image
                        source={{ uri: post.photo }}
                        style={styles.photo}
                        pinchGestureEnabled={true}
                      />
                    ) : null}
                  </View>
                </View>
                {foundLikes.length > 0 ? (
                  <View>
                    <Text
                      style={styles.heart}
                    >{`❤️ ${foundLikes.length}`}</Text>
                    <Interaction post_id={post.id} user_id={user_id} />
                  </View>
                ) : (
                  <View>
                    <Interaction post_id={post.id} user_id={user_id} />
                  </View>
                )}
              </View>
            </View>
          )
        })}
        <View style={styles.screen}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    position: "relative",
    justifyContent: "center",
  },
  heart: {
    paddingLeft: 6,
    marginTop: 5,
  },
  photo: {
    width: width,
    height: 250,
  },
  shade: {},
  postBox: {
    marginTop: 10,
    paddingTop: 7,
    backgroundColor: `#dcdcdc`,
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

export default HomeScreen
