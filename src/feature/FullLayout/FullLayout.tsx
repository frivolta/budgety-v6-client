import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
    Text,
    MessageBar,
    MessageBarType,
    ProgressIndicator,
} from '@fluentui/react'
import classNames from 'classnames'
import { Header } from '../../components/Header'
import { FullLayoutProps } from './interface'
import styles from './FullLayout.module.scss'
import { Navigation } from '../../components/Navigation'

export const FullLayout: React.FC<FullLayoutProps> = ({ children, title }) => {
    const { user, isLoading, loginWithPopup, logout, isAuthenticated } =
        useAuth0()

    return (
        <div className={classNames(styles.flGrid)}>
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
            <div className={classNames(styles.flSpan2, styles.mtmd)}>
                <Navigation />
            </div>
            <div className={`${styles.flSpan10} ${styles.content}`}>
                {isLoading && <ProgressIndicator />}
                <div className={styles.flGrid}>
                    <div className={`${styles.flSpan12} ${styles.mblg} `}>
                        <Text variant="xxLarge">{title}</Text>
                    </div>
                    <div className={styles.flSpan12}>
                        {!isLoading && <div>{children}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
