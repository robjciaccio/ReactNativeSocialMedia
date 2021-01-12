import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [user_id, setUser_id] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthday, setBirthday] = useState()
  const [image, setImage] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [prevImage, setPrevImage] = useState('')
  const [allPosts, setAllPosts] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [likes, setLikes] = useState([])
  const [comments, setComments] = useState([])

  const ipAdress = '192.168.0.135'

  // 192.168.0.135 downstairs
  // 192.168.1.107 upstairs

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

    await AsyncStorage.setItem('userData', jsonData)
    setLoggedIn(true)
  }

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

    await AsyncStorage.setItem('userData', jsonData)
    setLoggedIn(true)
  }

  const likePost = async (user_id, post_id) => {
    const response = await fetch(`http://${ipAdress}:4001/likes/new`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        post_id: post_id,
      }),
    })
    const resData = await response.json()

    fetchAllPosts()
    fetchLikes()
    fetchAllUsers()
  }

  const fetchAllPosts = async () => {
    const response = await fetch(`http://${ipAdress}:4001/posts/all`, {
      type: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const resData = await response.json()

    setAllPosts(resData)
  }

  const fetchLikes = async () => {
    const response = await fetch(`http://${ipAdress}:4001/likes/all`, {
      type: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const resData = await response.json()
    setLikes(resData)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const loggedInUser = await AsyncStorage.getItem('userData')
        console.log(loggedInUser)
        return loggedInUser != null ? JSON.parse(loggedInUser) : null
      } catch (error) {
        console.log('context line 34')
      }

      if (loggedInUser) {
        logMeIn(loggedInUser.resData)
      }
    }
    getData()
  }, [])

  const handlePreview = (previewImage) => {
    setPrevImage(previewImage)
  }

  const logOut = async () => {
    setLoggedIn(false)
    setUser_id('')
    setFirstName('')
    setLastName('')
    setUsername('')
    setEmail('')
    setPassword('')
    setBirthday('')
    setImage('')
    await AsyncStorage.clear()
  }

  const fetchPosts = async () => {
    const response = await fetch(`http://${ipAdress}:4001/posts/${user_id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const responseData = await response.json()

    setPosts(responseData)

    setIsLoading(false)
  }

  const fetchAllUsers = async () => {
    setIsLoading(true)
    const response = await fetch(`http://${ipAdress}:4001/users`, {
      type: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    const resData = await response.json()

    setAllUsers(resData)
  }

  const getComments = async () => {
    const response = await fetch(`http://${ipAdress}:4001/comments/all`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const resData = await response.json()
    setComments(resData)
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
        handlePreview,
        prevImage,
        fetchAllPosts,
        allPosts,
        fetchAllUsers,
        allUsers,
        fetchLikes,
        likes,
        likePost,
        comments,
        getComments,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
