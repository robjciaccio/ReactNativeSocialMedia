import React, { useContext, useLayoutEffect, useEffect, useState } from 'react'
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
} from 'react-native'
import { Context } from '../Context'
import Post from '../components/Post'
import Interaction from '../components/Interaction'

import ProfileScreenCard from '../components/ProfileScreenCard'

const ProfileScreen = ({ navigation, route }) => {
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
    <View>
      <ProfileScreenCard
        image={image}
        first_name={first_name}
        last_name={last_name}
      />

      <ScrollView>
        <View style={styles.screen}>
          <Post
            first_name={first_name}
            last_name={last_name}
            image={image}
            posts={posts}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    // marginTop: 100,
  },
})
export default ProfileScreen
