import { useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db, auth } from '@config/firebase.config'

const GoogleOAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const provider = new GoogleAuthProvider()

  const handleSignInWithPopup = async () => {
    try {
      const result = await signInWithPopup(auth, provider)

      const user = result.user

      // create refrence of the users document
      const usersRef = doc(db, 'users', user.uid)

      // save the new user to the database
      await setDoc(usersRef, {
        name: user.displayName,
        email: user.email,
      })

      if (user) {
        navigate('/')
      }
    } catch (error: unknown) {
      console.log((error as Error).message)
    }
  }
  return (
    <button
      onClick={handleSignInWithPopup}
      className='btn btn-outline btn-primary sm:btn-wide btn-block'
    >
      <span>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</span>
      <span className='ml-2'>
        <FcGoogle size={40} />
      </span>
    </button>
  )
}

export default GoogleOAuth
