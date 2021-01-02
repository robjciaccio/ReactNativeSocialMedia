import React, { useEffect, useState, useContext } from "react"
import { Context } from "../Context"
import * as ImagePicker from "expo-image-picker"

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
} from "react-native"

const RegisterScreen = ({ navigation }) => {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [birthday, setBirthday] = useState()
  const [image, setImage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { logMeIn, ipAdress } = useContext(Context)

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)
    result ? setImage(result) : setImage(null)
  }

  const createUser = async () => {
    setIsLoading(true)
    let localUri = image.uri
    let filename = localUri.split("/").pop()

    let match = /\.(\w+)$/.exec(filename)
    let type = match ? `image/${match[1]}` : `image`
    let response
    try {
      const formData = new FormData()
      formData.append("image", { uri: localUri, name: filename })
      formData.append("first_name", first_name)
      formData.append("last_name", last_name)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("birthdate", birthday)
      formData.append("username", username)
      formData.append("imageUri", image.uri)
      console.log(formData)
      response = await fetch(`http://${ipAdress}:4001/users/register`, {
        method: "POST",
        body: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      })

      const resData = await response.json()

      setImage(null)
      logMeIn(resData)

      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return isLoading ? (
    <View style={styles.screen}>
      <ActivityIndicator size='large' color='#00ff00' />
    </View>
  ) : (
    <View style={styles.screen}>
      <View style={styles.profileCard}>
        {image ? (
          <View>
            <Image source={{ uri: image.uri }} style={styles.cirleImage} />
            <Button title='edit' onPress={async () => await pickImage()} />
          </View>
        ) : (
          <View>
            <Button
              title='Select Profile Photo'
              onPress={async () => await pickImage()}
            />
          </View>
        )}
      </View>
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

      <Button title='Register' onPress={async () => await createUser()} />

      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.loginText}>Already a User? Login instead</Text>

      <Button title='Login' onPress={() => navigation.navigate("Login")} />
    </View>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    justifyContent: "center",
    alignItems: "center",
  },
  cirleImage: {
    width: 110,
    height: 110,
    borderRadius: 400 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
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
    backgroundColor: "white",
  },
  loginText: {
    textAlign: "center",
  },
})

export default RegisterScreen
