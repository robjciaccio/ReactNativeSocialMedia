import React from "react"
import { StyleSheet } from "react-native"
import BottomNavBar from "./Navigation/BottomNavBar"

import { ContextProvider } from "./Context"

import "react-native-gesture-handler"

export default function App() {
  return (
    <ContextProvider>
      <BottomNavBar />
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
