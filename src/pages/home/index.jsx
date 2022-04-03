import React from 'react'

export const Home = () => {
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <input placeholder="email" type="email" />
                <input placeholder="pass" type="password" />
                <button type="submit">Subir</button>
            </form>
        </div>
    )
}
