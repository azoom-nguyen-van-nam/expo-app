import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'

function Button({ text, style = '', onPress, active = false }) {
  return (
    <TouchableOpacity
      style={tw` rounded-3xl px-3 py-2 mr-2 ${style}`}
      className={`${active ? 'bg-blue-400' : 'border-slate-300 border-[1px]'}`}
      onPress={onPress}
    >
      <Text className={`text-center ${active ? 'text-white' : 'text-[#476488]'}`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
