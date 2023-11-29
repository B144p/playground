import { Outlet, RouteObject, useRoutes } from 'react-router-dom';

import { Suspense } from "react";
import './App.css';
import RyuComp from './views/app/RyuComp';

const Loading = () => {
  return (
    <div className={'loading-center-lg'}>
    </div>
  )
}

const BaseLayout = () => {
  return (
    <div
      style={{
        // margin: 0,
        // padding: 0,
        // boxSizing: 'border-box',
        // minWidth: '100vw',
        // minHeight: '100vh',
        // backgroundColor: 'blue',
      }}
    >
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PageRender />
    </Suspense>
  )
}

const PageRender = () => {
  const publicRouters: RouteObject = {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: "/", element: <RyuComp /> },
    ]
  }

  const ROUTER_SCOPE = useRoutes([publicRouters])
  return ROUTER_SCOPE
}

export default App;
