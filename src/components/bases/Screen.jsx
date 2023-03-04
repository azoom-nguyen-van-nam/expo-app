import React from 'react'
import { Platform, KeyboardAvoidingView, SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

function Screen(props) {
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height'
  return props.safeArea ? (
    <>
      <StatusBar style={props.statusbar} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          ...props.style
        }}
      >
        <KeyboardAvoidingView
          behavior={behavior}
          enabled
          {...props}
          style={{
            flex: 1
          }}
        />
      </SafeAreaView>
    </>
  ) : (
    <>
      <StatusBar style={props.statusbar} />
      <KeyboardAvoidingView behavior={behavior} enabled {...props} style={{ flex: 1, ...props.style }} />
    </>
  )
}

export default Screen
