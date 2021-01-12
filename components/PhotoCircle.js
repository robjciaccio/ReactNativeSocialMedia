import React, { useContext } from "react"
import { View, Text, StyleSheet, Button, Image } from "react-native"
import { Context } from "../Context"

const PhotoCircle = ({ image }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Image source={{ uri: image }} style={styles.cirleImage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cirleImage: {
    marginLeft: 6,
    width: 50,
    height: 50,
    borderRadius: 400 / 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
})

export default PhotoCircle
