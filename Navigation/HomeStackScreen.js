import * as React from "react"
import HomeScreen from "../screens/HomeScreen"
import { createStackNavigator } from "@react-navigation/stack"

const HomeStack = createStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ff1493",
          },
        }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
