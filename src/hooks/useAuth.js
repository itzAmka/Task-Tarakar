import { useState, useEffect } from 'react';
import { auth } from '../config/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setLoading(false);
			if (user) {
				setIsLoggedIn(true);
				setUser(user);
			} else {
				setIsLoggedIn(false);
			}
		});
	}, []);

	return {
		user,
		isLoggedIn,
		loading,
	};
};
