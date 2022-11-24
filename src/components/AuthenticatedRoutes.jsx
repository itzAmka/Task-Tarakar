import { useAuth } from '../hooks/useAuth';
import { Outlet, Navigate } from 'react-router-dom';

const AuthenticatedRoutes = () => {
	const { isLoggedIn, loading } = useAuth();

	if (loading) {
		return <h3>Loading...</h3>;
	}

	return isLoggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default AuthenticatedRoutes;
