import React from 'react'
import { Platform, View, TextInput } from 'react-native'

function TextField(props) {
  const outline = Platform.OS === 'web' && { outlineStyle: 'none' }
  return (
    <View
      style={{
        backgroundColor: props.background,
        borderRadius: 10,
        ...props.style
      }}
    >
      <TextInput
        keyboardType={props.keyboardType}
        style={{
          paddingRight: 15,
          paddingLeft: 15,
          height: 50,
          fontSize: 16,
          fontWeight: '500',
          textAlign: props.align,
          color: props.color,
          ...outline
        }}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
      />
      {props.children}
    </View>
  )
}

export default TextField
