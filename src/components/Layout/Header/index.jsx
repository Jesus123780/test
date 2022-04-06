import React from 'react'
import { WrapHeader } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const Header = ({ setOpen, open }) => {
  return (
    <WrapHeader>
      <div>
        <FontAwesomeIcon style={{ width: '25px', height: '25px', margin: '5px', padding: '5px' }} icon={faBars} onClick={() => setOpen(!open)} >{open ? 'TRUE' : 'FALSE'}  </FontAwesomeIcon>
      </div>

    </WrapHeader>
  )
}
