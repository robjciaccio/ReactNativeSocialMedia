import React, { useContext, useLayoutEffect } from "react"
import { View, Text, StyleSheet, Button, Image, ScrollView } from "react-native"
import { Context } from "../Context"
import ProfileCard from "../components/ProfileCard"

const ProfileScreen = ({ navigation }) => {
  const { first_name, last_name, username, logOut, image } = useContext(Context)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title='Log Out' onPress={() => logOut()} />,
    })
  }, [navigation])

  return (
    <ScrollView style={styles.screen}>
      <ProfileCard
        image={image}
        first_name={first_name}
        last_name={last_name}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cirleImage: {
    width: 110,
    height: 110,
    borderRadius: 400 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default ProfileScreen
