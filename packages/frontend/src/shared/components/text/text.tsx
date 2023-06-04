import React, { HTMLAttributes } from 'react'
import { getStyledTag } from './styles'

export type TagTypes =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'

export type TextVariant =
  | 'headingXL'
  | 'headingL'
  | 'headingM'
  | 'headingS'

interface Props extends HTMLAttributes<HTMLElement> {
  as?: TagTypes
  children: string | React.ReactNode
  variant: TextVariant
}

export const Text = ({ variant, children, as = 'p', ...rest }: Props) => {
  const StyledText = getStyledTag(as)

  return (
    <StyledText variant={variant} {...rest}>
      {children}
    </StyledText>
  )
}
