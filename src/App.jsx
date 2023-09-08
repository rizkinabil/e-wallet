import LandingPage from '@/pages/LandingPage.jsx';
import TopupPage from '@/pages/TopUp.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/topup',
    element: <TopupPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
