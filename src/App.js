import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Orders from './components/Orders/Orders';
import Grandpa from './components/Grandpa/Grandpa';

/* 
BASIC ROUTER SETUP:

1. npm i react-router-dom
2. create a router using createBrowserRouter
3. add RouterProvider and set router prop
4. create a lot of component
5. create main layout with some common part and one changing part based on the route
6. set main layout at the root of the route
7. set children routes
8. set links on the header component
*/

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
