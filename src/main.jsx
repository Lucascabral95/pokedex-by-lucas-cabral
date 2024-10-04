import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './Routes/PublicRoutes.jsx';
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <PublicRoutes />

    </BrowserRouter>
  </React.StrictMode>,
)
