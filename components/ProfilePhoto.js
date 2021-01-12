import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { Context } from '../Context'

const ProfilePhoto = ({ image }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Image source={{ uri: image }} style={styles.cirleImage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  cirleImage: {
    marginLeft: 6,
    width: 140,
    height: 140,
    borderRadius: 400 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
})

export default ProfilePhoto
