import React,{useContext} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Home from './screens/Home';
import Explore from './screens/Explore';

const NewsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Explore' component={Explore}/>
    </Tab.Navigator>
  )
}

export default NewsNavigation