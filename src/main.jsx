// importing necessary components
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ParentContext from './Components/ParentContext.jsx'

// rendering App.jsx so everything is displayed
ReactDOM.createRoot(document.getElementById('root')).render(
    <ParentContext>
        <App />
    </ParentContext>
)
