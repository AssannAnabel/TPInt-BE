import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { InvtryCtxProvider } from './context/inventoryContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvtryCtxProvider>
      <App />
    </InvtryCtxProvider>
  </React.StrictMode>,
)
