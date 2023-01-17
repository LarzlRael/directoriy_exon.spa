import React from 'react'
import DefaultStyle from './style/DefaultStyle'
const DefaultBtn = (props:any) => {
  return (
    <DefaultStyle
      className="DefaultBtn"
      background={props.background}
      color={props.color}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      width={props.width}
      padding={props.padding}
    >
      {props.children}
    </DefaultStyle>
  )
}

export default DefaultBtn
