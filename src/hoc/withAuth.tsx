import {useAuth0} from '@auth0/auth0-react'
import React from 'react'

export const withAuth = (Component: React.FC) => (props: any) => {
    const { isLoading, isAuthenticated, error } = useAuth0()

    if (isLoading) {
        return <p>Loading your credentials...</p>
    }
    if (!isLoading && !isAuthenticated) {
        // history push
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />
}
