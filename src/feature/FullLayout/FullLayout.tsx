import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ProgressIndicator } from '@fluentui/react'
import { Header } from '../../components/Header'
import { FullLayoutProps } from './interface'
import styles from './FullLayout.module.scss'

export const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
    const { user, isLoading, loginWithRedirect, logout, isAuthenticated } =
        useAuth0()

    return (
        <div className={styles.flGrid}>
            <div className={styles.flSpan12}>
                <div className={styles.container}>
                    <Header
                        isLoggedIn={isAuthenticated}
                        accounEmail={user?.email}
                        disabled={isLoading}
                        loginAction={loginWithRedirect}
                        logoutAction={logout}
                    />
                </div>
            </div>
            {isLoading && <ProgressIndicator />}
            {!isLoading && <div className={styles.flSpan12}>{children}</div>}
        </div>
    )
}
