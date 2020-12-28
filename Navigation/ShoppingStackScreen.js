import * as React from "react"
import ShoppingScreen from "../screens/ShoppingScreen"
import { createStackNavigator } from "@react-navigation/stack"

const ShoppingStack = createStackNavigator()

function ShoppingStackScreen() {
  return (
    <ShoppingStack.Navigator>
      <ShoppingStack.Screen
        name='Market'
        component={ShoppingScreen}
        options={{
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ff1493",
          },
        }}
      />
    </ShoppingStack.Navigator>
  )
}

export default ShoppingStackScreen
