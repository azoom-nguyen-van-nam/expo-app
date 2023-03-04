import React from 'react'
import { View } from 'react-native'

function Row(props) {
  if (props.hidden) return <></>
  return (
    <View
      {...props}
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: props.verticalAlign,
        alignItems: props.horizontalAlign,
        ...props.style
      }}
    />
  )
}

export default Row
