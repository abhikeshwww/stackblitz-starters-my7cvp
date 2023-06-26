import { Provider } from 'react-redux';
import './style.css';
import { Body } from './Components/Body';
import Head from './Components/Head';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import store from './Utils/store';
import { MainContainer } from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import React from 'react'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  );
}

export default App;
