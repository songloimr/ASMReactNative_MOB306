import {
  StyleSheet, Text, View, Image,
  TouchableHighlight,
} from 'react-native'
import React from 'react'

const Setting = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>

      <View style={styles.vHeader}>
        <TouchableHighlight
          underlayColor={'rgba(0, 0, 0, 0)'}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconBack}
            source={require('../../../assets/images/backpress.png')} />
        </TouchableHighlight>
        <Text style={styles.txtHeader}>Settings</Text>
        <Text style={{ width: 24 }}></Text>
      </View>

      <View style={styles.vbody}>

        <View style={styles.vbodyItem}>

          <View style={styles.vtitle}>
            <TouchableHighlight
              underlayColor={'rgba(0, 0, 0, 0)'}
              onPress={() => { }}>
              <Image
                style={styles.iconTitle}
                source={require('../../../assets/images/notifi_icon2.png')} />
            </TouchableHighlight>
            <Text style={styles.txtTitle}>Notification</Text>
          </View>

          <TouchableHighlight
            underlayColor={'rgba(0, 0, 0, 0)'}
            onPress={() => { }}>
            <Image
              style={styles.arrowIcon}
              source={require('../../../assets/images/arrow_mini_icon.png')} />
          </TouchableHighlight>

        </View>

        <View style={styles.vbodyItem}>

          <View style={styles.vtitle}>
            <TouchableHighlight
              underlayColor={'rgba(0, 0, 0, 0)'}
              onPress={() => { }}>
              <Image
                style={styles.iconTitle}
                source={require('../../../assets/images/security_Icon.png')} />
            </TouchableHighlight>
            <Text style={styles.txtTitle}>Security</Text>
          </View>

          <TouchableHighlight
            underlayColor={'rgba(0, 0, 0, 0)'}
            onPress={() => { }}>
            <Image
              style={styles.arrowIcon}
              source={require('../../../assets/images/arrow_mini_icon.png')} />
          </TouchableHighlight>

        </View>

        <View style={styles.vbodyItem}>

          <View style={styles.vtitle}>
            <TouchableHighlight
              underlayColor={'rgba(0, 0, 0, 0)'}
              onPress={() => { }}>
              <Image
                style={styles.iconTitle}
                source={require('../../../assets/images/help_Icon.png')} />
            </TouchableHighlight>
            <Text style={styles.txtTitle}>Help</Text>
          </View>

          <TouchableHighlight
            underlayColor={'rgba(0, 0, 0, 0)'}
            onPress={() => { }}>
            <Image
              style={styles.arrowIcon}
              source={require('../../../assets/images/arrow_mini_icon.png')} />
          </TouchableHighlight>

        </View>

        <View style={styles.vbodyItem}>

          <View style={styles.vtitle}>
            <TouchableHighlight
              underlayColor={'rgba(0, 0, 0, 0)'}
              onPress={() => { }}>
              <Image
                style={styles.iconTitle}
                source={require('../../../assets/images/darkmode_Icon.png')} />
            </TouchableHighlight>
            <Text style={styles.txtTitle}>Dark Mode</Text>
          </View>

          <TouchableHighlight
            underlayColor={'rgba(0, 0, 0, 0)'}
            onPress={() => { }}>
            <Image
              style={styles.arrowIcon}
              source={require('../../../assets/images/Toggle.png')} />
          </TouchableHighlight>

        </View>

        <View style={styles.vbodyItem}>

          <View style={styles.vtitle}>
            <TouchableHighlight
              underlayColor={'rgba(0, 0, 0, 0)'}
              onPress={() => { }}>
              <Image
                style={styles.iconTitle}
                source={require('../../../assets/images/logout_Icon.png')} />
            </TouchableHighlight>
            <Text style={styles.txtTitle}>Logout</Text>
          </View>

        </View>

      </View>

    </View>

  )
}

export default Setting

const styles = StyleSheet.create({
  txtTitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  txtHeader: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  iconTitle: {
    marginRight: 10,
  },
  vtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vbodyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#E5E5E5',
    marginBottom: 50,
    height: 24,
  },
  vbody: {
  },
  vHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    height: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
})