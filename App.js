import { StatusBar } from "expo-status-bar"
import React, { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, StackView } from "@react-navigation/stack"
import MainNavigation from "./Navigation/MainNavigation"
import BottomNavBar from "./Navigation/BottomNavBar"
import { Context } from "./Context"
import { ContextProvider } from "./Context"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import "react-native-gesture-handler"

export default function App() {
  return (
    <ContextProvider>
      <MainNavigation />
    </ContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
