import React from 'react'
import { ActivityIndicator, View, TouchableOpacity } from 'react-native'
import Text from './Text'

function Button(props) {
  const style = {
    paddingVertical: props.paddingVertical,
    paddingHorizontal: props.paddingHorizontal,
    backgroundColor: props.background,
    borderRadius: props.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style
  }
  if (props.progress) {
    return (
      <View style={style}>
        <ActivityIndicator color={props.color} />
      </View>
    )
  }
  if (props.colors.length) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text
          size={17}
          style={{
            color: props.color,
            fontWeight: '600'
          }}
        >
          {props.children}
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...style,
        backgroundColor: 'red'
      }}
    >
      <Text
        size={17}
        style={{
          color: props.color,
          fontWeight: '600'
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
