import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import { Context } from '../Context'
import ProfileCard from '../components/ProfileCard'

const Comments = ({ user_id, post_id }) => {
  const {
    ipAdress,
    comments,
    getComments,
    fetchAllUsers,
    allUsers,
  } = useContext(Context)

  useEffect(() => {
    getComments(), fetchAllUsers()
    console.log(comments)
  }, [])

  //   let foundComments = comments.filter((comment) => comment.post_id == post_id)

  return (
    <ScrollView>
      <View>
        {comments.map((comment, i) => {
          // console.log(foundComments[0])
          let foundUser = allUsers.find((user) => user.id == comment.user_id)

          return comment !== undefined && comment.post_id == post_id ? (
            <View key={i} style={styles.commentBox}>
              <ProfileCard
                first_name={foundUser.first_name}
                last_name={foundUser.last_name}
                image={foundUser.profile_photo}
              />
              <View>
                <Text style={styles.content}>{`${comment.content}`}</Text>
              </View>
              <View style={styles.seperator}></View>
            </View>
          ) : null
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  commentBox: {
    flexDirection: 'column',
    marginTop: 12,
  },
  content: {
    paddingTop: 8,
    paddingLeft: 70,
  },
  seperator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.2,
  },
})

export default Comments
