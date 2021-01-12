import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'
import CommentTab from '../components/CommentTab'
import Comments from '../components/Comments'
import ProfileCard from '../components/ProfileCard'
import { Context } from '../Context'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const { width } = Dimensions.get('window')

const CommentScreen = ({ route, navigation }) => {
  const { user_id, post_id, image, content, postUserId } = route.params
  const { allUsers } = useContext(Context)
  let foundUser = allUsers.find((user) => user.id == postUserId)

  return (
    <View>
      <View>
        <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
          <ProfileCard
            first_name={foundUser.first_name}
            last_name={foundUser.last_name}
            image={foundUser.profile_photo}
            navigation={navigation}
          />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Text style={styles.content}>{content}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.photo} />
      <View>
        <CommentTab
          user_id={user_id}
          post_id={post_id}
          picture={image}
          style={styles.commentBar}
        />
        <Comments user_id={user_id} post_id={post_id} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  comments: {
    flex: 1,
    height: 80,
  },
  content: {
    paddingLeft: 10,
    width: '80%',
    height: 40,
    paddingTop: 17,
    flexDirection: 'row',
  },
  photo: {
    width: width,
    height: 250,
  },
})
export default CommentScreen
