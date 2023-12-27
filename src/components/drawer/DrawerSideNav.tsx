import { type ComponentProps } from 'react'
import { NavLink } from 'react-router-dom'
import { FaTasks } from 'react-icons/fa'
import { FaGauge, FaGear } from 'react-icons/fa6'
import Logo from '@components/shared/Logo'

type DrawerSideNavProps = ComponentProps<'div'> & {
  closeDrawer?: () => void
}

export const DrawerSideNav = ({ closeDrawer }: DrawerSideNavProps) => {
  return (
    <>
      <ul className='menu gap-2 p-4 w-fit min-h-full bg-base-300 text-base-content'>
        {/* Sidebar content here */}
        <li className='mb-10'>
          <Logo closeDrawer={closeDrawer} />
        </li>
        <li className=''>
          <NavLink to='/' onClick={closeDrawer}>
            <span>
              <FaGauge size='20px' />
            </span>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/tasks' onClick={closeDrawer}>
            <span>
              <FaTasks size='20px' />
            </span>
            <span>Tasks</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings' onClick={closeDrawer}>
            <span>
              <FaGear size='20px' />
            </span>
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </>
  )
}
