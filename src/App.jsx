import RegisterPage from '@/pages/Register.jsx';
import LoginPage from '@/pages/Login.jsx';
import LandingPage from '@/pages/LandingPage.jsx';
import TopupPage from '@/pages/TopUp.jsx';
import PaymentPage from '@/pages/Payment.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/topup',
    element: <TopupPage />,
  },
  {
    path: '/payment/:paymentCode',
    element: <PaymentPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
