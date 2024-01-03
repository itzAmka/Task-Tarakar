import { Outlet } from 'react-router-dom'

import { UnAuthenticatedRoutes } from '@components/protect'
import { Container } from '@components/shared'

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
