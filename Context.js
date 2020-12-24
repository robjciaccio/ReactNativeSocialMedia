import React, { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [birthday, setBirthday] = useState()
  const [image, setImage] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  const logMeIn = async (resData) => {
    console.log(resData[0])
    setFirstName(resData[0].first_name)
    setLastName(resData[0].last_name)
    setUsername(resData[0].username)
    setEmail(resData[0].email)
    setPassword(resData[0].password)
    setBirthday(resData[0].birthdate)
    jsonData = JSON.stringify(resData)
    console.log(jsonData)
    await AsyncStorage.setItem("userData", jsonData)
    setLoggedIn(true)
  }
  console.log(loggedIn)

  useEffect(() => {
    const getData = async () => {
      try {
        const loggedInUser = await AsyncStorage.getItem("userData")
        console.log(loggedInUser)
        return loggedInUser != null ? JSON.parse(loggedInUser) : null
      } catch (error) {
        console.log("context line 34")
      }

      if (loggedInUser) {
        logMeIn(loggedInUser.resData)
        console.log(loggedInUser)
      }
    }
    getData()
  }, [])

  return (
    <Context.Provider
      value={{
        image,
        setImage,
        logMeIn,
        loggedIn,
        first_name,
        username,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
