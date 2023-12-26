import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		// find the value from the localStorage
		const jsonValue = localStorage.getItem(key);

		// if the value is found the parse and return it
		if (jsonValue !== null) {
			return JSON.parse(jsonValue);
		}

		// but if the initial value is a function, invoke it.
		if (typeof initialValue === 'function') {
			return initialValue();
		}

		// else if the initial value is is not a function and not found from the localStorage return it
		return initialValue;
	});

	// update the localStorage every time the key and value changes
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
