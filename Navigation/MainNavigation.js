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
import LoginNav from "./LoginNav"

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed"

  switch (routeName) {
    case "Home":
      return "Home"
    case "Profile":
      return "Profile"
    case "Account":
      return "My account"
    case "Notifications":
      return "Notifications"
    case "Shopping":
      return "Shopping"
  }
}

const MainNavigation = () => {
  const Stack = createStackNavigator()
  const { loggedIn } = useContext(Context)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={BottomNavBar}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () => (
              <Button
                onPress={() => setCount((c) => c + 1)}
                title='Update count'
              />
            ),
            headerTitleStyle: { left: "center" },
            // headerStyle: {
            //   backgroundColor: "#7fff00",
            // },
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
