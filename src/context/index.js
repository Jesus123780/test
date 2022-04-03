import { createContext, useState } from 'react'
import { object } from 'prop-types'

export const Context = createContext()

const Provider = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const value = {
        collapsed, 
        setCollapsed,
    }
    return <Context.Provider value={value}>{children}</Context.Provider>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Provider,
    Consumer: Context.Consumer
}
Provider.propTypes = {
    children: object.isRequired
}