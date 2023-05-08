import React, { useState, useMemo } from 'react';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import { routes, getFlattenRoutes, IRoute } from './routes'
import { IconDelete, IconUser, IconDashboard } from '@arco-design/web-react/icon'
import IconReact  from '@/assets/react.svg'
import "./App.css"
// import "@arco-design/web-react/dist/css/arco.css"
function App() {
  const flattenRoutes = useMemo(() => getFlattenRoutes(routes) || [], [routes]);
  const [count, setCount] = useState(0);
  const getIcon = (key:string) => {
    switch (key) {
      case 'user':
        return <IconUser key={`${key}Logo`}></IconUser>
      case 'dashboard':
        return <IconDashboard key={`${key}Logo`}></IconDashboard>
      default:
        break
    }
  }

  return (
    <div id="app">
      <BrowserRouter>
        <nav className='link-bar'>
          {
            flattenRoutes.map((route: IRoute) => {
              if (!route.ignore) {
                return (
                  <div key={`${route.key}`}>
                    {getIcon(route.key)}
                    <Link key={route.key} to={`/${route.key}`}>{route.key}</Link>
                  </div>
                )
              }
            })
          }
        </nav>
        <IconReact className='logo react' width='100px' height='100px'></IconReact>
        <div className="router-container">
          <Routes>
            {
              flattenRoutes.map((route: IRoute) => {
                return (
                  <Route
                    key={route.key}
                    path={`/${route.key}`}
                    element={route.component}
                  ></Route>
                )
              })
            }
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
