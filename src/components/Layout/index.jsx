import React, { useState } from 'react'
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styled from 'styled-components'
import { BGColor } from '../../assets/colors';

const LayoutComponent = ({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <Container >
            <Content bgColor='#212529' width={open ? '0%' : '11%'}>
                <Sidebar />
            </Content>
            <Content width={open ? '100%' : '89%'}>
                <Header
                    open={open}
                    setOpen={setOpen}
                />
                <Body>
                    {children}
                </Body>
                    <Footer />
            </Content>
        </Container>
    )
}

const Body = styled.div`
    height: 94vh;
    overflow: hidden auto;
`
const Content = styled.div`
    transition: all .3s ease-out;
    width: ${({ width }) => width || '89%'};
    background-color: ${({ bgColor }) => bgColor || BGColor};
    overflow: hidden
`
const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    /* display: grid;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    grid-template-rows: 55px 2fr;
    grid-template-columns: 148px 1fr;
    grid-template-areas:
    'aside head head head'
    'aside main main right'
    'aside main main right'
    'footer footer footer footer';
    text-align: center; */
    /* grid-gap: 10px; */
`

LayoutComponent.propTypes = {}

export default LayoutComponent