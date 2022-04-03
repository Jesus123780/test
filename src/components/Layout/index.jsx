import React from 'react'
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styled from 'styled-components'

const LayoutComponent = ({ children }) => {
    return (
        <Container>
            <Sidebar />
            <Header />
            <div style={{ gridArea: 'main', overflowY: 'auto' }}>
                {children}
            </div>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    grid-template-rows: 75px 2fr;
    grid-template-columns: 148px 1fr;
    grid-template-areas:
    'aside head head head'
    'aside main main right'
    'aside main main right'
    'footer footer footer footer';
    text-align: center;
    /* grid-gap: 10px; */
`

LayoutComponent.propTypes = {}

export default LayoutComponent