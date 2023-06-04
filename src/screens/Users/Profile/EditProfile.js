import {
  StyleSheet, Text,
  TextInput, View, Image, TouchableHighlight, Dimensions, 
  KeyboardAvoidingView, ScrollView,
} from 'react-native'
import React from 'react'

const EditProfile = (props) => {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView>
      <ScrollView>
    <View style={styles.container}>
      <View style={styles.vHeader}>
        <TouchableHighlight
          underlayColor={'rgba(0, 0, 0, 0)'}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconBack}
            source={require('../../../assets/images/tick_x_Icon.png')} />
        </TouchableHighlight>
        <Text style={styles.txtHeader}>Edit Profile</Text>
        <TouchableHighlight
          underlayColor={'rgba(0, 0, 0, 0)'}
          onPress={() => { }}>
          <Image
            style={styles.iconBack}
            source={require('../../../assets/images/tick_v_Icon.png')} />
        </TouchableHighlight>
      </View>

      <View style={styles.vAvatar}>
        <Image
          style={styles.imgAvatar}
          source={require('../../../assets/images/avatarEx.png')} />
        <TouchableHighlight
          style={styles.iconEditAvatar}
          underlayColor={'rgba(0, 0, 0, 0)'}
          onPress={() => { }}>
          <Image
            // style={styles.iconEditAvatar}
            source={require('../../../assets/images/Frame.png')} />
        </TouchableHighlight>
      </View>

      <View style={styles.vbody}>
        <View style={styles.vbodyItem}>
          <Text style={styles.txtTitle}>Username</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter your Username"
            placeholderTextColor="grey"
            keyboardType="default"
          />
        </View>

        <View style={styles.vbodyItem}>
          <Text style={styles.txtTitle}>Full Name</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter your Full Name"
            placeholderTextColor="grey"
            keyboardType="default"
          />
        </View>

        <View style={styles.vbodyItem}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtTitle}>Email Address</Text>
            <Text style={[styles.txtTitle, { color: '#C30052' }]}>*</Text>
          </View>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter your Email Address*"
            placeholderTextColor="grey"
            keyboardType="default"
          />
        </View>

        <View style={styles.vbodyItem}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtTitle}>Phone Number</Text>
            <Text style={[styles.txtTitle, { color: '#C30052' }]}>*</Text>
          </View>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter your Phone Number*"
            placeholderTextColor="grey"
            keyboardType="default"
          />
        </View>

        <View style={styles.vbodyItem}>
          <Text style={styles.txtTitle}>Bio</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter your Bio"
            placeholderTextColor="grey"
            keyboardType="default"
          />
        </View>

        <View style={styles.vbodyItem}>
          <Text style={styles.txtTitle}>Website</Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Enter your Website"
            placeholderTextColor="grey"
            keyboardType="default"
          />
        </View>

      </View>

    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  txtTitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
    marginBottom: 4,
  },
  txtInput: {
    width: '100%',
    height: 48,
    borderColor: '#4E4B66',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#050505',
    backgroundColor: '#FFFFFF',
  },
  vbodyItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconEditAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    backgroundColor: '#C4C4C4',
    bottom: 0,
    right: Dimensions.get('window').width / 2 - 80,
  },
  imgAvatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#C4C4C4',
  },
  vAvatar: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  txtHeader: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  vHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 24,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    padding: 24,
  },
})