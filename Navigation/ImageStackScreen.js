import * as React from "react"
import ImageUpload from "../screens/ImageUpload"
import { createStackNavigator } from "@react-navigation/stack"

const ImageStack = createStackNavigator()

function ImageStackScreen() {
  return (
    <ImageStack.Navigator>
      <ImageStack.Screen
        name='Images'
        component={ImageUpload}
        options={{
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#ff1493",
          },
        }}
      />
    </ImageStack.Navigator>
  )
}

export default ImageStackScreen
