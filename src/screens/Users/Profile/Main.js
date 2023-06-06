import {
  Image, Pressable,
  StyleSheet, Text, View, TouchableHighlight, Dimensions
} from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TabRecent from './TabRecent'
import TabNews from './TabNews'

const Tab = createMaterialTopTabNavigator();

const MainProfile = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.vTitle}>

        <Text style={{ width: 24 }}></Text>
        <Text style={styles.txtProfile}>Profile</Text>
        <TouchableHighlight
          underlayColor={'rgba(0, 0, 0, 0)'}
          onPress={() => navigation.navigate('Setting')}>
          <Image
            style={styles.settingIcon}
            source={require('../../../assets/images/settingIcon.png')} />
        </TouchableHighlight>
      </View>
      <View style={styles.vAvatar}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/avatarEx.png')} />
        <View style={styles.vCount}>
          <Text style={styles.numCount}>2156</Text>
          <Text style={styles.titleCount}>Followers</Text>
        </View>
        <View style={styles.vCount}>
          <Text style={styles.numCount}>567</Text>
          <Text style={styles.titleCount}>Following</Text>
        </View>
        <View style={styles.vCount}>
          <Text style={styles.numCount}>23</Text>
          <Text style={styles.titleCount}>News</Text>
        </View>
      </View>
      <View style={styles.vInfo}>
        <Text style={styles.txtName}>Wilson Franci</Text>
        <Text style={styles.txtInfo}>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
        </Text>
      </View>
      <View style={styles.vBtn}>
        <Pressable
          style={styles.btnEdit}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.txtBtnEdit}>Edit profile</Text>
        </Pressable>
        <Pressable
          style={styles.btnEdit}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.txtBtnEdit}>Website</Text>
        </Pressable>
      </View>
      <View style={styles.newsContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarPressColor: '#FFFFFF',
            tabBarLabelStyle: {
              height: 36,
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 24,
              letterSpacing: 0.12,
              color: '#000000',
            },
            tabBarItemStyle: {
              width: 112,
              height: 36,
              // justifyContent: 'center',
              // alignItems: 'center',
            },
            tabBarContentContainerStyle: {
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarStyle: {
              // borderBottomEndRadius: 30,
              // borderBottomStartRadius: 30,
              backgroundColor: '#FFFFFF',
              // height: 36,
            },
            tabBarIndicatorContainerStyle: {
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#1877F2',
              height: 4,
              borderRadius: 40,
              width: 70,
              marginHorizontal: Dimensions.get('window').width / 2 - 112,
            },
          }}
        >
          <Tab.Screen name="News" component={TabNews} />
          <Tab.Screen name="Recent" component={TabRecent} />
        </Tab.Navigator>
      </View>

    </View>
  )
}

export default MainProfile

const styles = StyleSheet.create({
  txtBtnEdit: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#FFFFFF',
  },
  btnEdit: {
    width: ((Dimensions.get('window').width - 48 - 16) / 2),
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  txtInfo: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  txtName: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  vInfo: {
    marginBottom: 16,
  },
  titleCount: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  numCount: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  vCount: {
    alignItems: 'center',
  },
  vAvatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  txtProfile: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  vTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  newsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  }
})