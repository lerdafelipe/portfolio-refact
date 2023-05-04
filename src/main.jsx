import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Responsive.css'
import { I18nextProvider } from 'react-i18next'
import './i18n/i18n.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
