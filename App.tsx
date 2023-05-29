import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Login from './src/components/users/screens/Login';
import Register from './src/components/users/screens/Register';
import Home from './src/components/news/screens/Home';
import Detail from './src/components/news/screens/Detail';

import AppNavigation from './src/components/navigation/AppNavigation';
import { UserProvider } from './src/components/users/UserContext';
import { NewsProvider } from './src/components/news/NewsContext';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.body}>
      <UserProvider>
        <NewsProvider>
          <AppNavigation/>
        </NewsProvider>
      </UserProvider>
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
