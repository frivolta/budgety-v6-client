export interface HeaderProps {
    isLoggedIn: boolean
    accounEmail?: string
    disabled: boolean
    logoutAction: () => void
    loginAction: () => void
}
