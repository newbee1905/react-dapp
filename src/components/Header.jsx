import { useReducer } from 'react'

import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'
import HeaderLogo from '@/components/HeaderLogo'
import {
	HeaderContext,
	HeaderDispatchContext,
	HeaderReducer,
} from '@/contexts/HeaderContext.js'

export default function Header() {
	const [open, dispatch] = useReducer(HeaderReducer, false)

	return (
		<HeaderContext.Provider value={open}>
			<HeaderDispatchContext.Provider value={dispatch}>
				<header
					left="0"
					top="0"
					position="fixed"
					h="full"
					w={!open ? '78px' : '250px'}
					z="99"
					transition="all"
					bg="cool-gray-950"
					p="y-6px x-14px"
					duration="400"
				>
					<div h="60px" display="flex" items="center" position="relative">
						<HeaderLogo />
						<Menu />
					</div>
					<Navbar />
				</header>
			</HeaderDispatchContext.Provider>
		</HeaderContext.Provider>
	)
}
