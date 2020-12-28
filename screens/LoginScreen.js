import React, { useState, useContext } from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"

import { Context } from "../Context"

const NotificationScreen = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { logMeIn } = useContext(Context)

  const loginUser = async () => {
    const respone = await fetch("http://localhost:4001/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })

    const resData = await respone.json()

    console.log(resData)

    if (!resData) {
      console.log("No")
    }
    logMeIn(resData)
  }
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
          onChangeText={(text) => setUsername(text)}
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
      <Button title='Log In' onPress={() => loginUser()} />
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
