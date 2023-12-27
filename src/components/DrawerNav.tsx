import { FaBars } from 'react-icons/fa'
import Logo from '@components/shared/Logo'

const DrawerNav = () => {
  return (
    <div>
      <nav className='w-full navbar bg-base-200 text-base-content'>
        <div className='flex-1 px-2 mx-2'>
          <div className='lg:hidden block'>
            <Logo />
          </div>
        </div>
        <div className='flex-none gap-3'>
          <label
            htmlFor='my-drawer-2'
            aria-label='open sidebar'
            className='btn btn-square btn-ghost lg:hidden'
          >
            <FaBars size='30px' />
          </label>
        </div>
      </nav>
    </div>
  )
}

export default DrawerNav
