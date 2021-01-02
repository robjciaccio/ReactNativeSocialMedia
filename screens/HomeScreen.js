import React, { useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import { Context } from "../Context"
import PostButton from "../components/PostButton"
import Post from "../components/Post"

const HomeScreen = ({ navigation }) => {
  const { first_name, user_id } = useContext(Context)

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Post")}>
        <View style={styles.screen}>
          <PostButton />
        </View>
      </TouchableOpacity>
      <View style={styles.screen}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    position: "relative",
    justifyContent: "center",
  },
})

export default HomeScreen
