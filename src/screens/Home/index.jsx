import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Score')}>
        <Text>Go to Score Screen</Text>
      </TouchableOpacity>
    </View>
  )
}
