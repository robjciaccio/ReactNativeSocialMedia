import * as React from "react"
import NotificationScreen from "../screens/NotificationsScreen"
import { createStackNavigator } from "@react-navigation/stack"

const NotificationStack = createStackNavigator()

function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name='Notifications'
        component={NotificationScreen}
        options={{
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ff1493",
          },
        }}
      />
    </NotificationStack.Navigator>
  )
}

export default NotificationStackScreen
