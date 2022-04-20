import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { MessageBar, MessageBarType, ProgressIndicator } from '@fluentui/react'
import { Header } from '../../components/Header'
import { FullLayoutProps } from './interface'
import styles from './FullLayout.module.scss'
import { Navigation } from '../../components/Navigation'

export const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
    const { user, isLoading, loginWithPopup, logout, isAuthenticated } =
        useAuth0()

    return (
        <div className={styles.flGrid}>
            <div className={styles.flSpan12}>
                <div className={styles.container}>
                    <Header
                        isLoggedIn={isAuthenticated}
                        accounEmail={user?.email}
                        disabled={isLoading}
                        loginAction={loginWithPopup}
                        logoutAction={logout}
                    />
                </div>
                <div className={styles.messageBar}>
                    <MessageBar messageBarType={MessageBarType.info}>
                        Welcome to budgety, setup your account
                    </MessageBar>
                </div>
            </div>
            <div className={styles.flSpan2}>
                <Navigation />
            </div>
            <div className={`${styles.flSpan10} ${styles.content}`}>
                {isLoading && <ProgressIndicator />}
                {!isLoading && <div>{children}</div>}
            </div>
        </div>
    )
}
