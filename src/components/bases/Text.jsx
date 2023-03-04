import React from 'react'
import { Text as ReactText } from 'react-native'

function Text(props) {
  if (props.hidden) return <></>

  return (
    <ReactText
      numberOfLines={props.lines}
      ellipsizeMode={props.overflowMode}
      {...props}
      style={{
        color: props.color,
        backgroundColor: props.background,
        textAlign: props.align,
        fontWeight: props.weight,
        ...props.style
      }}
    >
      {props.children}
    </ReactText>
  )
}

export default Text
