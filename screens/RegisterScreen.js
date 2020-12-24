import React, { useEffect, useState, useContext } from "react"
import { Context } from "../Context"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"
// import { Dropdown } from "react-native-material-dropdown"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import DropDownPicker from "react-native-dropdown-picker"
import { TouchableOpacity } from "react-native-gesture-handler"

const RegisterScreen = ({ navigation }) => {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [birthday, setBirthday] = useState()

  const { logMeIn } = useContext(Context)

  let userId, token

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const createUser = async () => {
    let response
    try {
      response = await fetch("http://localhost:4001/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          birthdate: birthday,
          username: username,
        }),
      })

      const resData = await response.json()

      console.log(resData[0].first_name)

      logMeIn(resData)
    } catch (error) {}
  }

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <TextInput
          style={{ height: 40 }}
          placeholder='First Name'
          onChangeText={(text) => setFirstName(text)}
          defaultValue={first_name}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={{ height: 40 }}
          placeholder='Last Name'
          onChangeText={(text) => setLastName(text)}
          defaultValue={last_name}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={{ height: 40 }}
          placeholder='e-mail'
          onChangeText={(text) => setEmail(text)}
          defaultValue={email}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={{ height: 40 }}
          placeholder='UserName'
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
      <View style={styles.form}>
        <TextInput
          style={{ height: 40 }}
          placeholder='Birthdate'
          onChangeText={(text) => setBirthday(text)}
          defaultValue={birthday}
        />
      </View>
      <TouchableOpacity>
        <Button title='Register' onPress={() => createUser()} />
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.loginText}>Already a User? Login instead</Text>
      <Button title='Login' onPress={() => navigation.navigate("Login")} />
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
  loginText: {
    textAlign: "center",
  },
})

export default RegisterScreen
