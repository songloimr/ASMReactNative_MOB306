import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Login from './src/screens/Users/Login';
import Register from './src/screens/Users/Register';
import Home from './src/screens/Home';
import Detail from './src/screens/Home/Detail';
import Profile from './src/navigation/ProfileStack';

import AppNavigation from './src/navigation/AppNavigation';
import { UserProvider } from './src/contexts/UserContext';
import { NewsProvider } from './src/contexts/NewsContext';
import Setting from './src/screens/Users/Profile/Setting';
import MainProfile from './src/screens/Users/Profile';
import EditProfile from './src/screens/Users/Profile/EditProfile';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.body}>
      <UserProvider>
        <NewsProvider>
          <AppNavigation/>
        </NewsProvider>
      </UserProvider>
      {/* <Setting/> */}
      {/* <EditProfile/> */}
      {/* <Profile/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor:'red',
  }
});

export default App;
