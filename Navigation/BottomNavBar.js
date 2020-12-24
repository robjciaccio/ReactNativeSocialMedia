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
import MainNavigation from "../Navigation/MainNavigation"

const BottomNavBar = () => {
  const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: "white",
    headerTitle: "A Screen",
  }
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
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
          }
          return <Ionicons name={iconName} size={size} color={color} />
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
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen name='Notifications' component={NotificationScreen} />
      <Tab.Screen name='Shopping' component={ShoppingScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavBar
