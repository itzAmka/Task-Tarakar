import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'
import Spinner from '@components/shared/Spinner'
import { ComponentProps } from 'react'

type UnAuthenticatedRoutesProps = ComponentProps<'div'>

export const UnAuthenticatedRoutes = ({
  children,
}: UnAuthenticatedRoutesProps) => {
  const { isLoggedIn, loading } = useAuth()

  const location = useLocation()

  const signUpPath = location.pathname === '/sign-up'
  const signInPath = location.pathname === '/sign-in'

  if (loading) return <Spinner />

  // if a user is loggedin and visits sign-up or sign-in page then redirect to home page.
  if (isLoggedIn && (signUpPath || signInPath)) {
    return <Navigate to='/' replace={true} />
  } else {
    return children
  }
}
