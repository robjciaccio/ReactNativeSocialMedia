import React, { useState, useEffect, useLayoutEffect } from "react"
import { View, StyleSheet, Image, Text, FlatList } from "react-native"
import { Surface, IconButton } from "react-native-paper"

const ImageUpload = ({ navigation }) => {
  const [images, setImages] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton icon='plus' />,
    })
  }, [navigation])

  return (
    <View style={styles.screen}>
      <View>
        <Text>Cover Image</Text>
        <Surface>
          <Image source={{ uri: "" }} style={StyleSheet.img} />
        </Surface>
      </View>
      <View>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <Surface>
              <Image source={{ uri: item.url }} />
            </Surface>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  coverImg: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
})

export default ImageUpload
