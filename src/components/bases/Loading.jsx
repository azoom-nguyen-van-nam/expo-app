import React from 'react'
import { View, ActivityIndicator } from 'react-native'

function Loading(props) {
  return props.hidden ? (
    <></>
  ) : (
    <>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: props.background,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator color={props.tintColor} />
      </View>
    </>
  )
}
export default Loading
