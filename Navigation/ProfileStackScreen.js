import * as React from "react"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import NotificationScreen from "../screens/NotificationsScreen"
import ShoppingScreen from "../screens/ShoppingScreen"
import Ionicons from "@expo/vector-icons/Ionicons"
import { createStackNavigator } from "@react-navigation/stack"

const ProfileStack = createStackNavigator()

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ff1493",
          },
        }}
      />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackScreen
