import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import GiveClasses from './pages/GiveClasses';
import Root from './pages/GiveClasses/root';
import Success from './pages/GiveClasses/Sucess';
import Study from './pages/Study';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/give-classes',
    element: <Root />,
    children: [
      {
        path: '',
        element: <GiveClasses />,
      },
      {
        path: 'success',
        element: <Success />,
      },
    ],
  },
  {
    path: '/study',
    element: <Study />,
  },
  {
    path: '*',
    element: <p>404</p>,
  },
]);
