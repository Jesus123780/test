import React, { useState } from 'react'
import Options from '../../Acordion/Options'
import { LinkOption, Nav } from './styled'

export const Sidebar = ({ open, setOpen }) => {
  const [active, setActive] = useState(false)
  const handleClick = index => setActive(index === active ? false : index)
  return (
    <Nav open={open}>
      <LinkOption to='/expenses'>
        <span>Dashboard</span>
      </LinkOption>
      <span>TEMPLATE</span>
      <LinkOption to='/'>
        <span>Typography</span>
      </LinkOption>
      <LinkOption to='/expenses'>
        <span>tables</span>
      </LinkOption>
      <LinkOption to='/expenses'>
        <span>Chat</span>
      </LinkOption>
      <Options label='Mi panel' active={active === 3} handleClick={() => handleClick(3)} >
        <LinkOption to='/expenses'>
          <span>tables</span>
        </LinkOption>
        <LinkOption to='/expenses'>
          <span>Chat</span>
        </LinkOption>
      </Options>
    </Nav>
  )
}
