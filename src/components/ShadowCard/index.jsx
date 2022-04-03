// import { TextH2Main } from 'components/common/h2'
import React from 'react'
import { ShadowCardContainer } from './styles'

export const MainCard = ({ children, title, noneShadow, display, width, weight, size }) => {
    return (
        <div style={{ display: display, width: width }}>
            <h2>{title}</h2>
            <ShadowCardContainer noneShadow={noneShadow}>
                <div>
                    {children}
                </div>
            </ShadowCardContainer>
        </div>
    )
}