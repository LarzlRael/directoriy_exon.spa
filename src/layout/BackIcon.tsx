import React from 'react'
import { IoChevronBack } from 'react-icons/io5';
import ToolTip from '../components/boxes/ToolTip'

interface backIconProps {
  label: string
  onClick?: () => void
}
export const BackIcon = ({ onClick, label = 'Regresar' }: backIconProps) => {
  return (
    <ToolTip content={label} theme="light">
      <IoChevronBack width="30px" height="30px" color="white" onClick={onClick} />
    </ToolTip>
  )
}
