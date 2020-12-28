import React, { useContext } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import RegisterScreen from "../screens/RegisterScreen"
import LoginScreen from "../screens/LoginScreen"
import { Context } from "../Context"

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed"

  switch (routeName) {
    case "Login":
      return "Login"
    case "Register":
      return "Register"
  }
}

const AuthNavigation = () => {
  const Stack = createStackNavigator()
  const { loggedIn } = useContext(Context)

  return (
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
  )
}

export default AuthNavigation
