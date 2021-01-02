import React, { useContext } from "react"
import { View, Text, StyleSheet, Button, Image } from "react-native"
import { Context } from "../Context"

const ProfileCard = ({ first_name, last_name, image }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Image source={{ uri: image }} style={styles.cirleImage} />
        <Text style={styles.nameText}>{`${first_name} ${last_name}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nameText: {
    position: "absolute",
    paddingTop: 15,
    paddingLeft: 65,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "flex-end",
    fontSize: 15,
    fontWeight: "600",
  },
  screen: {
    width: "65%",
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
