import React from 'react';
import ReactDOM from 'react-dom';
import {initializeIcons, ThemeProvider} from '@fluentui/react';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import budgetyTheme from "./styling/theme";

import './styling/scss/global.scss'

initializeIcons()

ReactDOM.render(        <ThemeProvider theme={budgetyTheme}>
    <App /></ThemeProvider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
