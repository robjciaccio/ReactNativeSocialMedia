import React, { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Context } from "../Context"

const ProfileScreen = () => {
  const { username } = useContext(Context)
  return (
    <View style={styles.screen}>
      <Text>{`${username}'s Profile Page`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
})
export default ProfileScreen
