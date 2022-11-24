import { useAuth } from '../hooks/useAuth';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const UnAuthenticatedRoutes = () => {
	const { isLoggedIn, loading } = useAuth();

	const location = useLocation();

	const signUpPath = location.pathname === '/sign-up';
	const signInPath = location.pathname === '/sign-in';

	if (loading) return <h3>Loading...</h3>;

	// if a user is loggedin and visits sign-up or sign-in page then redirect to home page.
	if (isLoggedIn && (signUpPath || signInPath)) {
		return <Navigate to='/' replace={true} />;
	} else {
		return <Outlet />;
	}
};

export default UnAuthenticatedRoutes;
