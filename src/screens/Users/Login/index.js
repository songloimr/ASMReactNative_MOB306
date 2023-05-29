import {
  StyleSheet, Text,
  View, TextInput, Pressable, Image,
  TouchableHighlight, ScrollView, KeyboardAvoidingView
} from 'react-native'
import React, { useState } from 'react'


import iconShowPassword from '../../../assets/images/eye.jpg';
import iconHidePassword from '../../../assets/images/eye2.png';

const Login = (props) => {
  const { navigation } = props;
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    // dung de day man hinh len khi typing
    <KeyboardAvoidingView style={loginstyles.body}>
      <ScrollView>
        <View>
          <Text style={loginstyles.hello}>Hello</Text>
          <Text style={loginstyles.again}>Again! </Text>
          <Text style={loginstyles.welcom}>Welcome back you’ve been missed</Text>

          <View style={loginstyles.usernameContainer}>
            <Text style={loginstyles.usernameLabel}>UserName*</Text>
            <TextInput style={loginstyles.usernameInput}></TextInput>
          </View>

          <View style={loginstyles.passwordContainer}>
            <Text style={loginstyles.passwordLabel}>PassWord*</Text>
            <View style={loginstyles.passwordInputIcon}>
              <TextInput secureTextEntry={isShowPassword} style={loginstyles.paswordInput}></TextInput>
              <TouchableHighlight style={loginstyles.eyeIcon} onPress={() => setIsShowPassword(!isShowPassword)}>
                <Image
                  source={
                    isShowPassword ? iconHidePassword : iconShowPassword
                  }></Image>
              </TouchableHighlight>
            </View>
          </View>
          <Pressable style={loginstyles.buttonLoginContainer}>
            <Text style={loginstyles.buttonLoginLabel}>Login</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Register')}
            style={loginstyles.buttonLoginContainer}>
            <Text style={loginstyles.buttonLoginLabel}>Register</Text>
          </Pressable>

          <Text style={loginstyles.textContinue}>or conutiune with</Text>

          <View style={loginstyles.loginWithFaceBookOrGoogle}>

            <View style={loginstyles.loginFaceBookContainer}>
              <Pressable style={loginstyles.buttonLoginFaceBook}>
                <Image source={require('../../../assets/images/f.png')}></Image>
                <Text style={loginstyles.loginFaceBookLabel}>FaceBook</Text>
              </Pressable>
            </View>

            <View style={loginstyles.loginGoogleContainer}>
              <Pressable style={loginstyles.buttonLoginGoogle}>
                <Image source={require('../../../assets/images/G.png')}></Image>
                <Text style={loginstyles.loginGoogleLabel}>Google</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

const loginstyles = StyleSheet.create({
  loginWithFaceBookOrGoogle: {
    flexDirection: 'row',
    with: '100%',
    marginTop: 24,
    justifyContent: 'space-between'
  },
  loginGoogleContainer: {
    position: 'relative'
  },
  loginGoogleLabel: {
    color: '#667080',
    lineHeight: 24,
    letterSpacing: 0.12,
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 10
  },
  buttonLoginGoogle: {
    marginTop: 24,
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: '#EEF1F4',
    height: 48,
    width: 160,
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 24,

  },
  loginFaceBookContainer: {
    justifyContent: 'space-between'
  },
  loginFaceBookLabel: {
    color: '#667080',
    lineHeight: 24,
    letterSpacing: 0.12,
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 10
  },
  buttonLoginFaceBook: {
    marginTop: 24,
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#EEF1F4',
    height: 48,
    width: 160,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 24,

  },
  buttonLoginLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  buttonLoginContainer: {
    marginTop: 24,
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#1877F2',
    height: 50,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 24,
  },
  textContinue: {
    marginTop: 16,
    textAlign: 'center'
  },
  passwordLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
  },
  passwordContainer: {
    marginTop: 16
  },
  passwordInputIcon: {
    position: 'relative',

  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12
  },
  paswordInput: {
    padding: 10,
    width: '100%',
    height: 48,
    borderRadius: 6,
    backgroundColor: 'white',
    borderColor: '#4E4B66',
    borderWidth: 1
  },
  usernameInput: {
    padding: 10,
    width: '100%',
    height: 48,
    borderRadius: 6,
    backgroundColor: 'white',
    borderColor: '#4E4B66',
    borderWidth: 1
  },
  usernameLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,

  },
  usernameContainer: {
    marginTop: 48,
  },
  hello: {
    fontSize: 48,
    lineHeight: 72,
    fontWeight: '700',
    letterSpacing: 0.12,
    color: '#050505'
  },
  welcom: {
    width: 222,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4E4B66',
    marginTop: 4,
  },
  again: {
    fontSize: 48,
    letterSpacing: 0.12,
    lineHeight: 72,
    fontWeight: '700',
    color: '#1877F2',
    width: 222
  },
  body: {
    padding: 24,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  }
})