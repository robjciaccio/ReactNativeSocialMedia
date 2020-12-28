import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"
import NotificationStackScreen from "./NotificationStackScreen"
import HomeStackScreen from "./HomeStackScreen"
import ProfileStackScreen from "./ProfileStackScreen"
import ShoppingStackScreen from "./ShoppingStackScreen"

import ImageStackScreen from "./ImageStackScreen"

const BottomNavBar = ({ navigation }) => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        options={({ route }) => ({
          title: route.params.name,
        })}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Home") {
              iconName = "home-outline"
            } else if (route.name === "Profile") {
              iconName = "person-circle-outline"
            } else if (route.name === "Notifications") {
              iconName = "notifications-outline"
            } else if (route.name === "Shopping") {
              iconName = "card-outline"
            } else if (route.name === "Image Upload") {
              iconName = "image-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          headerTitleStyle: {
            color: "#ff1493",
          },
          headerStyle: {
            backgroundColor: "#7fff00",
          },
        })}
        tabBarOptions={{
          activeTintColor: `#ff1493`,
          inactiveTintColor: "grey",
          showLabel: false,
        }}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='Profile' component={ProfileStackScreen} />
        <Tab.Screen name='Notifications' component={NotificationStackScreen} />
        <Tab.Screen name='Shopping' component={ShoppingStackScreen} />
        <Tab.Screen name='Image Upload' component={ImageStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavBar
