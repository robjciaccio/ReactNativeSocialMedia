import React, { useContext } from "react"
import { Image, View, Button } from "react-native"
import { Context } from "../Context"

const PhotoPreview = ({ imageUri, navigation }) => {
  const { prevImage } = useContext(Context)
  return (
    <View>
      <Button title='exit' onPress={navigation.navigate("Profile")} />
      <Image source={{ uri: prevImage }} />
    </View>
  )
}

export default PhotoPreview
