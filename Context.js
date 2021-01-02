import React, { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [user_id, setUser_id] = useState()
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [birthday, setBirthday] = useState()
  const [image, setImage] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const ipAdress = "192.168.0.135"

  const logMeIn = async (resData) => {
    console.log(resData[0])
    setUser_id(resData[0].id)
    setFirstName(resData[0].first_name)
    setLastName(resData[0].last_name)
    setUsername(resData[0].username)
    setEmail(resData[0].email)
    setPassword(resData[0].password)
    setBirthday(resData[0].birthdate)
    setImage(resData[0].profile_photo)
    jsonData = JSON.stringify(resData)
    console.log(jsonData)
    await AsyncStorage.setItem("userData", jsonData)
    setLoggedIn(true)
  }
  console.log(loggedIn)

  const logInCurrent = async (resData) => {
    setUser_id(resData.id)
    setFirstName(resData.first_name)
    setLastName(resData.last_name)
    setUsername(resData.username)
    setEmail(resData.email)
    setPassword(resData.password)
    setBirthday(resData.birthdate)
    setImage(resData.profile_photo)
    jsonData = JSON.stringify(resData)
    console.log(jsonData)
    await AsyncStorage.setItem("userData", jsonData)
    setLoggedIn(true)
  }

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

  const logOut = async () => {
    setLoggedIn(false)
    setUser_id("")
    setFirstName("")
    setLastName("")
    setUsername("")
    setEmail("")
    setPassword("")
    setBirthday("")
    setImage("")
    await AsyncStorage.clear()
  }

  const fetchPosts = async () => {
    const response = await fetch(`http://${ipAdress}:4001/posts/${user_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    const responseData = await response.json()

    setPosts(responseData)

    setIsLoading(false)
  }

  return (
    <Context.Provider
      value={{
        image,
        setImage,
        logMeIn,
        loggedIn,
        first_name,
        last_name,
        username,
        logInCurrent,
        logOut,
        ipAdress,
        user_id,
        posts,
        setPosts,
        fetchPosts,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
