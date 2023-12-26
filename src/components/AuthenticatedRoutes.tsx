import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'
import Spinner from '@components/shared/Spinner'

const AuthenticatedRoutes = () => {
  const { isLoggedIn, loading } = useAuth()

  if (loading) return <Spinner bgColor='bg-green-300' />

  return isLoggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default AuthenticatedRoutes
