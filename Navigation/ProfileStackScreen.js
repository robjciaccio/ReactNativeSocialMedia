import * as React from 'react'
import ProfileScreen from '../screens/ProfileScreen'
import { createStackNavigator } from '@react-navigation/stack'
import PhotoPreview from '../screens/PhotoPreview'

const ProfileStack = createStackNavigator()

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#ff1493',
          },
        }}
      />
      <ProfileStack.Screen name='Preview' component={PhotoPreview} />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackScreen
