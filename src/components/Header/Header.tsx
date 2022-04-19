import React, { useState } from 'react'
import {
    ActionButton,
    DefaultButton,
    IContextualMenuProps,
    IIconProps,
    Image,
} from '@fluentui/react'

import styles from './Header.module.scss'
import { HeaderProps } from './interfaces'
import LogoPng from '../../assets/images/logo/logo.png'

const addFriendIcon: IIconProps = { iconName: 'AddFriend' }
const accountIcon: IIconProps = { iconName: 'ReminderPerson' }

const Header: React.FC<HeaderProps> = ({
    isLoggedIn,
    accounEmail,
    logoutAction,
    loginAction,
    disabled,
}) => {
    const menuProps: IContextualMenuProps = {
        items: [
            {
                key: 'logout',
                text: 'Logout',
                iconProps: { iconName: 'SignOut' },
                onClick: logoutAction,
            },
        ],
    }
    return (
        <div className={styles.container}>
            <div>
                <Image src={LogoPng} width={100} />
            </div>
            <div className={styles.loginButtons}>
                {!isLoggedIn && (
                    <DefaultButton
                        iconProps={addFriendIcon}
                        allowDisabledFocus
                        onClick={loginAction}
                        disabled={disabled}
                    >
                        Sign in
                    </DefaultButton>
                )}
                {isLoggedIn && accounEmail && (
                    <ActionButton
                        iconProps={accountIcon}
                        split
                        text={accounEmail}
                        menuProps={menuProps}
                        disabled={disabled}
                    />
                )}
            </div>
        </div>
    )
}

export default Header
