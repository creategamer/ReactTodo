import React from 'react'
import UserContextProvider from '../ContextLogin/Context/UserContextProvider'
import Login from '../ContextLogin/Components/Login'
import Profile from '../ContextLogin/Components/Profile'

function LoginButton() {
    return (
        <div>
            <UserContextProvider>
                <Login />
                <Profile />
            </UserContextProvider>
        </div>
    )
}

export default LoginButton
