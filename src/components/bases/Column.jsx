import React from 'react'
import { View } from 'react-native'

function Column(props) {
  if (props.hidden) return <></>
  return (
    <View
      {...props}
      style={{
        flexDirection: 'column',
        ...props.style
      }}
    />
  )
}

export default Column
