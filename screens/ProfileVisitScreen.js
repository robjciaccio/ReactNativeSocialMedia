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

const ProfileVisitScreen = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const { first_name, last_name, image, userID } = route.params

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)

  const {
    username,
    logOut,
    user_id,
    ipAdress,

    fetchPosts,
  } = useContext(Context)

  let mappedPosts

  useEffect(() => {
    const getPostsByUid = async () => {
      const response = await fetch(`http://${ipAdress}:4001/posts/${userID}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const resData = await response.json()
      setPosts(resData)
    }
    getPostsByUid()
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
      <View>
        <ProfileScreenCard
          image={image}
          first_name={first_name}
          last_name={last_name}
        />
      </View>
      <View style={styles.screen}>
        <ScrollView>
          <Post
            first_name={first_name}
            last_name={last_name}
            image={image}
            posts={posts}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    // marginTop: 100,
  },
})
export default ProfileVisitScreen
