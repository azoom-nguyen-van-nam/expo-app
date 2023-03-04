import React from 'react'
import { View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import BaseButton from '~components/bases/PrimaryButton'
import NavigateButton from '~components/bases/NavigateButton'

export default ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <NavigateButton onPress={goToPurchase} text="Thông tin" />,
      title: 'Tính Điểm'
    })
  }, [navigation])

  const goToPurchase = () => {
    console.log('x')
    navigation.navigate('Purchases')
  }

  return (
    <View style={tw`flex flex-row items-center justify-start mx-3 my-2`}>
      <BaseButton
        text="ĐXTN THPT"
        active
        onPress={() => {
          console.log('1')
        }}
      />
      <BaseButton text="ĐXTN GDTX" />
      <BaseButton text="Công thức" />
    </View>
  )
}
