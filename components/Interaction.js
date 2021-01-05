import React, { useContext } from "react"
import { Text, Button, StyleSheet, View } from "react-native"
import { Context } from "../Context"

const Interaction = ({ post_id, user_id }) => {
  const { ipAdress, fetchLikes } = useContext(Context)

  const addLike = async () => {
    const response = await fetch(`http://${ipAdress}:4001/likes/new`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_id: post_id,
        user_id: user_id,
      }),
    })
    const resData = await response.json()

    console.log(resData)
    fetchLikes()
  }

  return (
    <View style={styles.screen}>
      <Button title='Like' onPress={async () => await addLike()} />
      <Button title='Comment' />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
  },
})

export default Interaction
