import React, { useContext } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { Context } from "../Context"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import BottomNavBar from "../Navigation/BottomNavBar"

const HomeScreen = ({ navigation }) => {
  const { first_name } = useContext(Context)
  return (
    <View style={styles.screen}>
      <Text>{`${first_name}'s home page`}</Text>
      <Button
        title='go to Profile'
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  )
}

// HomeScreen.navigationOptions = (navData) => {
//   return {
//     headerTitle: "Home",
//   }
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
})

export default HomeScreen
