import React from 'react'
import {Header} from '../../components/Header'
import {FullLayoutProps} from './interface'
import styles from './FullLayout.module.scss'

export const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
    return (
        <div className={styles.flGrid}>
            <div className={styles.flSpan12}>
                <div className={styles.container}>
                    <Header isLoggedIn />
                </div>
            </div>
            <div className={styles.flSpan12}>{children}</div>
        </div>
    )
}
