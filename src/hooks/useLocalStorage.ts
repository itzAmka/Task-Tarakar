import  { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T | (() => T)): [T, Dispatch<SetStateAction<T>>] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		// find the value from the localStorage
		const jsonValue = localStorage.getItem(key);

		// if the value is found the parse and return it
		if (jsonValue !== null) {
			return JSON.parse(jsonValue) as T;
		}

		// but if the initial value is a function, invoke it.
		if (typeof initialValue === 'function') {
			return (initialValue as () => T)();
		}

		// else if the initial value is is not a function and not found from the localStorage return it
		return initialValue as T;
	});

	// update the localStorage every time the key and value changes
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storedValue))
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
};
