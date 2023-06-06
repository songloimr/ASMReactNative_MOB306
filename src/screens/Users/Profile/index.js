import {
  StyleSheet,
} from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Setting from './Setting';
import MainProfile from './Main';
import EditProfile from './EditProfile';
import CreateNews from '../CreateNews';

const Stack = createNativeStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={MainProfile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="CreateNews" component={CreateNews} />
    </Stack.Navigator>
  )
}

export default Profile
