import { type ComponentProps } from 'react'
import { Link } from 'react-router-dom'

type LogoProps = ComponentProps<'div'> & {
  closeDrawer?: () => void
}

export const Logo = ({ closeDrawer }: LogoProps) => {
  return (
    <>
      <Link to='/' className='btn btn-ghost' onClick={closeDrawer}>
        <h1 className='md:text-2xl text-xl font-bold uppercase'>
          Task Tarakar
        </h1>
      </Link>
    </>
  )
}
