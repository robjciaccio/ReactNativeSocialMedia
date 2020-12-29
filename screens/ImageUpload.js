import React, { useState, useEffect } from "react"
import { Button, Image, View, Platform } from "react-native"
import * as ImagePicker from "expo-image-picker"
import Constants from "expo-constants"

export default function ImagePickerExample() {
  const [image, setImage] = useState()

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!")
        }
      }
    })()
  }, [])

  const handlePhoto = async () => {
    let response
    let localUri = image.uri
    let filename = localUri.split("/").pop()

    let match = /\.(\w+)$/.exec(filename)
    let type = match ? `image/${match[1]}` : `image`

    try {
      const formData = new FormData()
      formData.append("image", { uri: localUri, name: filename })
      response = await fetch("http://192.168.1.106:4001/users/image", {
        method: "POST",
        body: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      const resData = await response.json()
      console.log(formData)
      console.log(resData)

      setImage(null)
    } catch (err) {
      console.log(err)
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title='Pick an image from camera roll' onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <View>
        <Button title='upload Image' onPress={() => handlePhoto()} />
      </View>
    </View>
  )
}
