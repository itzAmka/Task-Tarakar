import { type ComponentProps } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '@hooks/index'
import { Spinner } from '@components/shared'

type AuthenticatedRoutesProps = ComponentProps<'div'>

export const AuthenticatedRoutes = ({ children }: AuthenticatedRoutesProps) => {
  const { isLoggedIn, loading } = useAuth()

  const location = useLocation()

  const redirectTo = location.pathname

  if (loading) return <Spinner bgColor='bg-green-300' />

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={`/sign-in?redirectTo=${redirectTo}`} />
  )
}
