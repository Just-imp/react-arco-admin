import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {store} from './store'
import { Provider } from 'react-redux'
import {RouterProvider} from 'react-router-dom'
import router from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </Provider>,
)
