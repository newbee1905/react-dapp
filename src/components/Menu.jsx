import { useContext } from 'react'
import { HeaderContext, HeaderDispatchContext } from '@/contexts/HeaderContext'

export default function Menu() {
	const open = useContext(HeaderContext)
	const dispatch = useContext(HeaderDispatchContext)
	return (
		<label
			position="absolute"
			right="0"
			transition="all"
			cursor="pointer"
			text="2xl white center"
			h="60px"
			min-w="[50px]"
			top="50%"
			translate="y--1/2"
			display="flex"
			justify="center"
			items="center"
		>
			<input
				type="checkbox"
				value=""
				sr="only"
				className="peer"
				onChange={dispatch}
			></input>
			<div i={!open ? 'tabler-menu-2' : 'tabler-menu-deep'} />
		</label>
	)
}
