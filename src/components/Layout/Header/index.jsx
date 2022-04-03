import React from 'react'
import { WrapHeader } from './styled'

export const Header = ({ setOpen, open }) => {
  return (
    <WrapHeader>
      <div>
      <button onClick={() => setOpen(!open)}>Open{ open ? 'TRUE' : 'FALSE'}</button>
      </div>
      Header
    </WrapHeader>
  )
}
