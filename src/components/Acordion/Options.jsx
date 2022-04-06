import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MenuLeft, OptionMenu, Span, Row } from './Styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

const Options = ({ index, active, children, label, path, handleClick }) => {

    const [height, setHeight] = useState(0)
    const [heightMenu, setHeightMenu] = useState(0)
    const refButton = useRef()
    const refMenu = useRef()
    const location = useLocation()

    useEffect(() => {
        setHeight(refButton.current.clientHeight - refMenu.current.clientHeight)
        setHeightMenu(refMenu.current.clientHeight)
        !!location.pathname.includes(path) && handleClick(index)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setHeight(active ? (height + heightMenu) : refButton.current.clientHeight - refMenu.current.clientHeight)
        // eslint-disable-next-line
    }, [active])
    return (
        <MenuLeft type='button' onClick={e => handleClick(e)} active={active} ref={refButton} height={height}>
            <Row active={active}>
                
                <Span active={active}>{label}</Span>
                <FontAwesomeIcon icon={faAngleDown} style={{width: '18px', height: '18px', margin:'0 0 0 5px'}}></FontAwesomeIcon>
            </Row>
            <OptionMenu active={active} ref={refMenu}>
                {children}
            </OptionMenu>
        </MenuLeft>
    )
}

export default Options