import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native'
import ProfileCard from './ProfileCard'
import { Context } from '../Context'
import PhotoPreview from '../screens/PhotoPreview'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Interaction from '../components/Interaction'

const { width } = Dimensions.get('window')

const Post = ({ first_name, last_name, image, posts, navigation }) => {
  const [users, setUsers] = useState([])
  // const [foundPosts, setFoundPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { user_id, handlePreview } = useContext(Context)

  const extraHandlePreview = (image) => {
    navigation.navigate('Preview')
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
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Comment', {
                  user_id: user_id,
                  post_id: post.id,
                  postUserId: post.user_id,
                  image: post.photo,
                  content: post.content,
                })
              }
            >
              <View style={styles.postPhoto}>
                {post.photo ? (
                  <Image source={{ uri: post.photo }} style={styles.photo} />
                ) : null}
              </View>
            </TouchableWithoutFeedback>
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
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {},
  bottomBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.2,
  },
  photo: {
    width: width,
    height: 250,
  },
  postBox: {
    marginTop: 10,
  },

  content: {
    width: '80%',
    height: 40,
    flexDirection: 'row',
  },
  postPhoto: {
    alignItems: 'center',
  },
})

export default Post
