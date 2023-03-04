import React from 'react'
import { ScrollView as ScrollViewReact } from 'react-native'

function ScrollView(props) {
  if (props.hidden) return <></>
  return (
    <ScrollViewReact
      keyboardShouldPersistTaps="handled"
      {...props}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: props.verticalAlign,
        alignItems: props.horizontalAlign,
        ...props.style
      }}
    />
  )
}
export default ScrollView
