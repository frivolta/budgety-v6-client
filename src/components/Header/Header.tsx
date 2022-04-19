import React, {useState} from 'react'
import {DefaultButton, IContextualMenuProps, IIconProps, Image, IStackTokens,} from '@fluentui/react'

import {CommandButton} from '@fluentui/react/lib/Button'
import styles from './Header.module.scss'
import {HeaderProps} from './interfaces'
import LogoPng from '../../assets/images/logo/logo.png'

const addFriendIcon: IIconProps = { iconName: 'AddFriend' }

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
    const [checked, setChecked] = useState(true)
    const stackTokens: IStackTokens = { childrenGap: 40 }
    const addIcon: IIconProps = { iconName: 'Add' }
    const menuProps: IContextualMenuProps = {
        items: [
            {
                key: 'emailMessage',
                text: 'Email message',
                iconProps: { iconName: 'Mail' },
            },
            {
                key: 'calendarEvent',
                text: 'Calendar event',
                iconProps: { iconName: 'Calendar' },
            },
        ],
        // By default, the menu will be focused when it opens. Uncomment the next line to prevent this.
        // shouldFocusOnMount: false
    }
    return (
        <div className={styles.container}>
            <div>
                <Image src={LogoPng} width={100} />
            </div>
            <div className={styles.loginButtons}>
                {!isLoggedIn && (
                    <DefaultButton iconProps={addFriendIcon} allowDisabledFocus>
                        Sign in
                    </DefaultButton>
                )}
                {isLoggedIn && (
                    <CommandButton
                        uniqueId={13432}
                        renderPersistedMenuHiddenOnMount={false}
                        ariaHidden={false}
                        iconProps={addIcon}
                        text="New item"
                        open
                        toggled
                        menuProps={menuProps}
                        disabled={false}
                        checked={checked}
                    />
                )}
            </div>
        </div>
    )
}

export default Header
