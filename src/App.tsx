import { useEffect } from 'react'

/* -------- react router dom -------- */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* --------- react toastify --------- */
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

/* -------------- layouts ------------ */
import RootLayout from '@layouts/RootLayout.tsx'
import AuthLayout from '@layouts/AuthLayout.tsx'

/* -------------- pages ------------- */
import Dashboard from '@pages/dashboard.tsx'
import Tasks from '@pages/tasks.tsx'
import Settings from '@pages/settings.tsx'
import SignIn from '@pages/sign-in.tsx'
import SignUp from '@pages/sign-up.tsx'
import ForgotPassword from '@pages/forgot-password.tsx'

/* ------------- helpers ------------ */
import { changeThemeMode } from '@helpers/changeThemeMode.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
])

const App = () => {
  useEffect(() => {
    changeThemeMode('selectedOptionTheme')
  }, [])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        className='sm:mt-10 mt-5 px-5'
      />
    </>
  )
}

export default App
