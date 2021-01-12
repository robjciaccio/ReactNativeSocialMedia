import React, { useContext, useLayoutEffect, useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  _ScrollView,
} from 'react-native'
import { Context } from '../Context'
import Post from '../components/Post'
import ProfileCard from '../components/ProfileCard'
import ProfilePhoto from '../components/ProfilePhoto'
import { AppLoading } from 'expo-app-loading'

const ProfileScreenCard = ({ image, first_name, last_name }) => {
  return (
    <View style={styles.profileCard}>
      <ProfilePhoto image={image} />
      <View style={styles.textBox}>
        <Text>{`${first_name} ${last_name}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textBox: {
    alignItems: 'center',
    marginTop: 160,
    fontSize: 60,
  },
})
export default ProfileScreenCard
