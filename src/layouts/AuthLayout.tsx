import { UnAuthenticatedRoutes } from '@components/protect'
import Container from '@components/shared/Container'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      <Container>
        <UnAuthenticatedRoutes>
          <Outlet />
        </UnAuthenticatedRoutes>
      </Container>
    </div>
  )
}

export default AuthLayout
