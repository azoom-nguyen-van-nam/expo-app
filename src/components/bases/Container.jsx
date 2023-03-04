import React from 'react'
import { View } from 'react-native'

function Container(props) {
  if (props.hidden) return <></>
  return (
    <View
      {...props}
      style={{
        flex: 1,
        justifyContent: props.verticalAlign,
        alignItems: props.horizontalAlign,
        ...props.style
      }}
    />
  )
}

export default Container
