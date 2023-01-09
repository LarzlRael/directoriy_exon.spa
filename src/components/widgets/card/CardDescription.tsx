import React from 'react'
import { H2 } from '../../text/'
interface CardDescriptionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const CardDescription = ({
  title,
  children,
  className,
}: CardDescriptionProps) => {
  return (
    <div className={`border-box ${className}`}>
      <H2
        fontSize="18px"
        fontWeight="bold"
        textAlign="start"
        /* color: $title-color; */
        margin=" 0  0 1rem 0 "
      >
        {title}
      </H2>
      {children}
    </div>
  )
}


