import { Navigate } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'
import Spinner from '@components/shared/Spinner'
import { ComponentProps } from 'react'

type AuthenticatedRoutesProps = ComponentProps<'div'>

const AuthenticatedRoutes = ({ children }: AuthenticatedRoutesProps) => {
  const { isLoggedIn, loading } = useAuth()

  if (loading) return <Spinner bgColor='bg-green-300' />

  return isLoggedIn ? children : <Navigate to='/sign-in' />
}

export default AuthenticatedRoutes
