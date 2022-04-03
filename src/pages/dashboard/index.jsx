import React, { useContext } from 'react'
import AutoContext from '../../AutoContext'
import { MainCard } from '../../components/ShadowCard'
import { ContainerCard } from './styled'

export const Dashboard = () => {
    const { auth, logout, setUser } = useContext(AutoContext)
    console.log(auth, logout, setUser)
    const { username } = auth || {}
    return (
        <ContainerCard>
            Hola, {username || 'No user'}
            <button onClick={()=> logout()}>Salir</button>
            <MainCard title="Dashboard" >
                LASKJDLSAK
            </MainCard>
            <MainCard title="Dashboard" >
                LASKJDLSAK
            </MainCard>
        </ContainerCard>
    )
}
