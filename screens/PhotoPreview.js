import React, { useContext } from "react"
import { Image, View, Button, Text, StyleSheet } from "react-native"
import { Context } from "../Context"
import FitImage from "react-native-fit-image"

const PhotoPreview = ({ route, navigation }) => {
  const { imageUri } = route.params

  console.log(imageUri)
  return (
    <View>
      <Text>Photo Preview</Text>
      <Button title='exit' onPress={() => navigation.navigate("Home")} />
      <FitImage style={styles.preview} source={{ uri: imageUri }} />
    </View>
  )
}

const styles = StyleSheet.create({
  // preview: {
  //   alignSelf: "center",
  //   height: 150,
  //   width: 150,
  //   borderWidth: 1,
  //   borderRadius: 75,
  // },
})

export default PhotoPreview
