import React, { useContext } from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'
import { Context } from '../Context'
import Ionicons from '@expo/vector-icons/Ionicons'

const Interaction = ({
  navigation,
  heartColor,
  user_id,
  post_id,
  image,
  content,
  postUserId,
}) => {
  const {
    ipAdress,
    fetchAllPosts,
    fetchLikes,
    fetchAllUsers,
    likePost,
  } = useContext(Context)

  return (
    <View style={styles.screen}>
      <View style={styles.heart}>
        <Ionicons
          size={30}
          //   name='heart-outline'
          name='heart-outline'
          title='Like'
          color='red'
        />
      </View>
      <View style={styles.chat}>
        <Ionicons
          size={27}
          name='chatbubble-outline'
          onPress={() =>
            navigation.navigate('Comment', {
              user_id: user_id,
              post_id: post_id,
              image: image,
              content: content,
              postUserId: postUserId,
            })
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    marginTop: 7,
  },
  chat: {
    marginLeft: 8,
  },
  heart: {
    marginLeft: 8,
  },
})

export default Interaction
