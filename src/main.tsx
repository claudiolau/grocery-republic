import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Navbar } from './components'
import { Footer } from './components/footer'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Navbar />
        <App />
        <Footer />
    </React.StrictMode>
)
