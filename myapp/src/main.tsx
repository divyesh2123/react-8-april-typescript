import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Counter } from './Counter.tsx'
import DisplayTypeData from './DisplayTypeData.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DisplayTypeData />
  </React.StrictMode>,
)
