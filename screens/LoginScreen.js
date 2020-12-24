import React, { useState } from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const NotificationScreen = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.screen}>
      <Button
        title='Register'
        onPress={() => navigation.navigate("Register")}
      />
      <View style={styles.form}>
        <TextInput
          style={{ height: 40 }}
          placeholder='Username'
          onChangeText={(text) => setusername(text)}
          defaultValue={username}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={{ height: 40 }}
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          defaultValue={password}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    padding: 10,
    margin: 15,
    height: 40,
    borderColor: `#add8e6`,
    borderWidth: 1,
    justifyContent: "center",
  },
})

export default NotificationScreen
