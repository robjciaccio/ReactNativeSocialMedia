import * as React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import CommentScreen from '../screens/CommentScreen'
import PhotoPreview from '../screens/PhotoPreview'
import ProfileVisitScreen from '../screens/ProfileVisitScreen'

const HomeStack = createStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#ff1493',
          },
        }}
      />
      <HomeStack.Screen
        name='Comment'
        component={CommentScreen}
        options={({ route }) => ({ name: route.params.title })}
        options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#ff1493',
          },
        }}
      />
      <HomeStack.Screen
        name='Friend'
        component={ProfileVisitScreen}
        options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#ff1493',
          },
        }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
