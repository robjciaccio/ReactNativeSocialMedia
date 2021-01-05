import React, { useContext } from "react"
import { View, Text, StyleSheet, Button, Image } from "react-native"
import { Context } from "../Context"

const ProfileCard = ({ first_name, last_name, image }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Image source={{ uri: image }} style={styles.cirleImage} />
      </View>
      <View style={styles.nameText}>
        <Text style={styles.text}>{`${first_name} ${last_name}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nameText: {
    justifyContent: "center",
    paddingLeft: 7,
    paddingRight: 10,
  },
  text: {
    fontWeight: "200",
  },
  screen: {
    width: "65%",
    flexDirection: "row",
  },
  cirleImage: {
    marginLeft: 6,

    width: 50,
    height: 50,
    borderRadius: 400 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default ProfileCard
