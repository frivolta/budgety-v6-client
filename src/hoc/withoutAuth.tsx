import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgressIndicator } from '@fluentui/react'

export const withoutAuth = (Component: React.FC) => (props: any) => {
    const { isLoading, isAuthenticated } = useAuth0()
    const navigate = useNavigate()

    if (isLoading) {
        return <ProgressIndicator />
    }
    if (!isLoading && isAuthenticated) {
        navigate('/')
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />
}
