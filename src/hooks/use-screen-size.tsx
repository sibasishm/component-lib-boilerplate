import { useEffect, useState } from 'react';

export const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return screenSize;
};
