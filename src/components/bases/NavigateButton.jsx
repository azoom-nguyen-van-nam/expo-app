import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default ({ text, style = '', color = 'blue', onPress }) => {
  return (
    <TouchableOpacity style={tw`bg-${color}-500 rounded-2xl p-2 mr-2 ${style}`} onPress={onPress}>
      <Text style={tw`text-white font-bold`}>{text}</Text>
    </TouchableOpacity>
  )
}
