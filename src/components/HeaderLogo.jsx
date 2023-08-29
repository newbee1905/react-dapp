import { useContext } from 'react';
import { HeaderContext } from '@/contexts/HeaderContext';

import LogoImage from '@/assets/logo.png'

export default function HeaderLogo() {
	const open = useContext(HeaderContext);
	return (
		<>
			<span>
				<img
					src={LogoImage}
					m-t="10px"
					m-r="5px"
					m-l="12px"
					transition="all"
					duration="300"
					leading="60px"
					className={!open ? 'opacity-0' : 'opacity-100'}
				/>
			</span>
			<div
				text="white xl"
				font="600"
				className={!open ? 'opacity-0' : 'opacity-100'}
				transition="all"
				duration="300"
			>
				SpaceX
			</div>
		</>
	)
}
