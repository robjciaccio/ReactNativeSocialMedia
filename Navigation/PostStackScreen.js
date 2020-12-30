import React from "react"
import PostScreen from "../screens/PostScreen"
import { createStackNavigator } from "@react-navigation/stack"

const ProfileStack = createStackNavigator()

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='Create Post'
        component={PostScreen}
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
