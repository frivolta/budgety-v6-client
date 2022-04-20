import React from 'react'
import { INavLinkGroup, Nav } from '@fluentui/react'
import { navLinkGroups } from './navLinkGroup'
import styles from './Navigation.module.scss'

const Navigation: React.FC = (props) => {
    return (
        <Nav
            selectedKey="key6"
            ariaLabel="Nav example with wrapped link text"
            groups={navLinkGroups}
            className={styles.container}
        />
    )
}

export default Navigation
