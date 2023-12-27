import { useRef, type ComponentProps } from 'react'
import { Outlet } from 'react-router-dom'
import DrawerNav from '@components/DrawerNav'
import AuthenticatedRoutes from '@components/AuthenticatedRoutes'
import DrawerSideNav from '@components/DrawerSideNav'

type RootLayoutProps = ComponentProps<'div'>

const RootLayout = ({}: RootLayoutProps) => {
  const drawerCheckbox = useRef<HTMLInputElement>(null)

  const closeDrawer = () => {
    if (drawerCheckbox.current) {
      drawerCheckbox.current.checked = false
    }
  }

  return (
    <>
      <AuthenticatedRoutes>
        <div className='drawer lg:drawer-open'>
          <input
            id='my-drawer-2'
            type='checkbox'
            className='drawer-toggle'
            ref={drawerCheckbox}
          />

          <main className='drawer-content'>
            <DrawerNav />

            <div className='lg:py-12 py-8 lg:px-10 px-8'>
              <Outlet />
            </div>
          </main>

          <aside className='drawer-side'>
            <label
              htmlFor='my-drawer-2'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <DrawerSideNav closeDrawer={closeDrawer} />
          </aside>
        </div>
      </AuthenticatedRoutes>
    </>
  )
}

export default RootLayout
