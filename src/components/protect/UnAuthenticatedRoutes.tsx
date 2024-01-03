import { type ComponentProps } from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'

import { useAuth } from '@hooks/index'
import { Spinner } from '@components/shared'

type UnAuthenticatedRoutesProps = ComponentProps<'div'>

export const UnAuthenticatedRoutes = ({
  children,
}: UnAuthenticatedRoutesProps) => {
  let [searchParams] = useSearchParams()
  const { isLoggedIn, loading } = useAuth()

  const location = useLocation()

  const signUpPath = location.pathname === '/sign-up'
  const signInPath = location.pathname === '/sign-in'
  const forgotPasswordPath = location.pathname === '/forgot-password'

  const redirectTo = searchParams.get('redirectTo')

  if (loading) return <Spinner />

  // if a user is loggedin and visits sign-up, sign-in or forgot-password pages then redirect to home page.
  if (isLoggedIn && (signUpPath || signInPath || forgotPasswordPath)) {
    if (redirectTo) return <Navigate to={redirectTo} />

    return <Navigate to='/' />
  } else {
    return children
  }
}
