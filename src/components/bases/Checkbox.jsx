import React from 'react'
import { Text as ReactText, Image } from 'react-native'
import Assets from '~assets'

function Switch(props) {
  if (props.hidden) return <></>
  return (
    <Image
      source={props.selected ? Assets.icons.checked : Assets.icons.uncheck}
      style={{
        width: 18,
        height: 18
      }}
      resizeMode="contain"
    />
  )
}

export default Switch
