import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { SEGColor, PColor } from '../../assets/colors'
export const Span = styled.span`
    color: ${ props => props.active ? '#fff' : `${ SEGColor }` };
    display: block;
    font-size: 16px;
    user-select: none;
`
export const LinkOption = styled(Link)`
    display: block;
    text-decoration: none;
    font-size: 16px;
    white-space: nowrap;
    & > span a {
        user-select: none;
        color: #fff;
    }
`
export const ContainerBurger = styled.div`
    .BurgerMenu__container {
    display: flex;
    flex-direction: column;    
    span {
      background-color: ${ PColor };
      width: 30px;
      height: 2px;
      border-radius: 1px;
      transition: all .3s ease-out;
    }
    .open:nth-child(1) {
      transform: rotate(45deg) translateY(4px) translateX(6px);

    }
    .open:nth-child(2) {
      opacity: 0;
    }
    .open:nth-child(3) {
      transform: rotate(-45deg) translateY(-7px) translateX(9px);
    }
    .close:nth-child(1) {
      transform: rotate(0) translateY(0);
    }
    .close:nth-child(2) {
      opacity: 1;
    }
    .close:nth-child(3) {
      transform: rotate(0) translateY(0);
    }
}`
export const SideBarLeft = styled.aside`
    flex-direction: column;
    transition: all .3s ease-out;
    transition: 1s ease;
    width: 100%; 
    position: relative;
    @media( min-width: 1200px ){
        ${ ({ collapsed })=> collapsed &&css`
            /* width: 0pc;  */
            /* opacity: 0; */
        ` };
    }
`
export const ContainerOptions = styled.div`
    position: sticky;
    top: 0;
    @media( max-width: 1200px ){
        display: none;
    }
`
export const ButtonMenu = styled.button`
    background-color: transparent;
`
export const Content = styled.div`
    position: sticky;
    top: 100px;
    @media( max-width: 1200px ){
        width: 100%;
    }
`
export const BoxSideBar = styled.aside`
    height: 100%;
    box-shadow: 0 0px 40px rgb(0 0 0 / 5%);
    background-color: ${ ({ theme })=> theme.InvTColor };
    width: 100%;
    @media( max-width: 1200px ){
        height: min-content;
        border-radius: 0px;
    }
`
export const MenuLeft = styled.button`
    width: 100%;
    background-color: #212529;
    height: ${ ({ height }) => height ? height : 'auto' }px;
    display: flex;
    color: #fff;
    flex-direction: column;
    cursor: pointer;
    border: none;
    outline: 0;
    position: relative;
    transition: .3s ease-out;
    align-self: ${ ({ alignSelf }) => alignSelf || 'auto' };
    & > div:first-child { pointer-events: none; }
    overflow: hidden;
    & a {
        color: ${ props => props.active ? '#FFF' : '#000' };
    }
     
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 10%;
    position: relative;
    z-index: 10;
    width: 100%;
    align-items: center;
    margin: auto;
    padding: 30px 0px;
    transition: 1s ease-out;
    
    & > i {
        transition: .3s ease-out;
        transform: ${ props => props.active ? '' : 'rotate(-90deg)' };
    }
`
export const OptionMenu = styled.div`
    width: 100%;
    display: block;
    width: 100%;
    position: relative;
    transform: translateY(${ ({ height }) => height }px);
    overflow: hidden;
    background-color: #212529;
    padding: 8px 0;
`
export const Box = styled.div`
`
export const BoxTitleNavBar = styled.div`
    width: 100%;
    border-radius: 10px; 
    padding: 30px 0px;
    @media( min-width: 1200px ){
        display: ${ ({ collapsed })=> collapsed ? 'block' : 'flex' };
    }
    @media( max-width: 1200px ){
        display: flex;
        padding: 10px;
        margin-top: calc(70px + 5px);
        border-radius: 0px; 
    }
`