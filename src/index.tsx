import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { initializeIcons, ThemeProvider } from '@fluentui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import budgetyTheme from './styling/theme'

import './styling/scss/global.scss'
import Unprotected from './pages/Unprotected'
import Dashboard from './pages/Dashboard'

initializeIcons()

ReactDOM.render(
    <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN ?? ''}
        clientId={process.env.REACT_APP_CLIENT_ID ?? ''}
        redirectUri={window.location.origin}
    >
        <ThemeProvider theme={budgetyTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Unprotected />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </Auth0Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
