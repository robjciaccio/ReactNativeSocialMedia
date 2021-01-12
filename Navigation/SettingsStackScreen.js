import * as React from 'react'
import SettingsScreen from '../screens/SettingsScreen'
import { createStackNavigator } from '@react-navigation/stack'

const SettingsStack = createStackNavigator()

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#ff1493',
          },
        }}
      />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen
