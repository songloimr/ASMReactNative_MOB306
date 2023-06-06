import {
  Image, Pressable,
  StyleSheet, Text, View, TouchableHighlight, Dimensions
} from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Setting from './Setting';
import MainProfile from './Main';
import EditProfile from './EditProfile';

const Stack = createNativeStackNavigator();

const Profile = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        ScreenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MainProfile} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})