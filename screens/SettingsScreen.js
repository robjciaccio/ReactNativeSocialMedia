import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default SettingsScreen
