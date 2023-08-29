import { createContext } from 'react'

export const HeaderContext = createContext(null)
export const HeaderDispatchContext = createContext(null)

export function HeaderReducer(open, action) {
	return !open
}
