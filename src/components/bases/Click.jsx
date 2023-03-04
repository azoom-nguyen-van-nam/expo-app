import React from 'react'
import { TouchableOpacity } from 'react-native'

function Click(props) {
  return <TouchableOpacity onPress={props.onPress}>{props.children}</TouchableOpacity>
}

export default Click
