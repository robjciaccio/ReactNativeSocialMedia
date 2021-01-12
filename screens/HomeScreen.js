import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'
import { Context } from '../Context'
import ProfileCard from '../components/ProfileCard'
import Interaction from '../components/Interaction'

const { width } = Dimensions.get('window')

const HomeScreen = ({ navigation }) => {
  const {
    user_id,
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

  return isLoading ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <View>
      <ScrollView>
        {allPosts.map((post, i) => {
          let foundUser = allUsers.find((user) => user.id == post.user_id)
          return (
            <View key={i} style={styles.postBox}>
              <View>
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate('Friend', {
                      first_name: foundUser.first_name,
                      last_name: foundUser.last_name,
                      image: foundUser.profile_photo,
                      userID: foundUser.id,
                    })
                  }
                >
                  <View>
                    <ProfileCard
                      first_name={foundUser.first_name}
                      last_name={foundUser.last_name}
                      image={foundUser.profile_photo}
                      navigation={navigation}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.shade}>
                <View>
                  <Text style={styles.content}>{post.content}</Text>
                </View>
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate('Comment', {
                      user_id: user_id,
                      post_id: post.id,
                      postUserId: post.user_id,
                      image: post.photo,
                      content: post.content,
                      title: foundUser.first_name,
                    })
                  }
                >
                  <View>
                    {post.photo ? (
                      <Image
                        source={{ uri: post.photo }}
                        style={styles.photo}
                        disabled={true}
                      />
                    ) : null}
                  </View>
                </TouchableWithoutFeedback>
                <View>
                  <Interaction
                    post_id={post.id}
                    user_id={user_id}
                    image={post.photo}
                    navigation={navigation}
                    postUserId={post.user_id}
                    content={post.content}
                  />
                  <View style={styles.bottomBorder}></View>
                </View>
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
    position: 'relative',
    justifyContent: 'center',
  },
  bottomBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.2,
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
  },
  content: {
    paddingLeft: 10,
    width: '80%',
    height: 40,
    paddingTop: 17,
    flexDirection: 'row',
  },
  postPhoto: {
    alignItems: 'center',
  },
})

export default HomeScreen
