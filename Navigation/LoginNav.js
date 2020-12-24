import React, { useContext } from "react"
import { View, Text, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import NotificationScreen from "../screens/NotificationsScreen"
import ShoppingScreen from "../screens/ShoppingScreen"
import BottomNavBar from "../Navigation/BottomNavBar"
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import RegisterScreen from "../screens/RegisterScreen"
import LoginScreen from "../screens/LoginScreen"
import { Context } from "../Context"

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed"

  switch (routeName) {
    case "Login":
      return "Login"
    case "Register":
      return "Register"
  }
}

const MainNavigation = () => {
  const Stack = createStackNavigator()
  const { loggedIn } = useContext(Context)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerTitleStyle: {
              color: "#ff1493",
            },
          })}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerTitleStyle: {
              color: "#ff1493",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
