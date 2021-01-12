import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import { Context } from '../Context'
import PhotoCircle from './PhotoCircle'

const Comment = ({ user_id, post_id, picture }) => {
  const [content, setContent] = useState('')
  const { image, ipAdress, getComments } = useContext(Context)

  const commentHandler = async () => {
    const response = await fetch(`http://${ipAdress}:4001/comments/new`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        post_id: post_id,
        content: content,
      }),
    })
    const resData = await response.json()
    console.log(resData)
    setContent('')
    getComments()
  }

  return (
    <View>
      <View style={styles.commentLine}>
        <PhotoCircle image={image} />
        <View style={styles.textBox}>
          <TextInput
            style={{ height: 41 }}
            placeholder='Add a Comment'
            onChangeText={(text) => setContent(text)}
            defaultValue={content}
          />
        </View>
        <View style={styles.button}>
          <Button title='Post' onPress={() => commentHandler()} />
        </View>
        <View></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  commentLine: {
    flexDirection: 'row',
  },
  textBox: {
    backgroundColor: 'white',
    width: '70%',
    marginBottom: 8,
    borderRadius: 20,
    paddingLeft: 5,
    flexDirection: 'row',
    height: 45,
    // paddingTop: 10,
    marginTop: 10,
  },
  button: {
    paddingTop: 13,
  },
})

export default Comment
