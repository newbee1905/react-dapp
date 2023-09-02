import { createContext } from 'react'

/**
 * Only for checking state of header open or not
 * @typedef TGeneralContext
 */
export const HeaderContext = createContext(null)
export const HeaderDispatchContext = createContext(null)

export function HeaderReducer(open, _action) {
	return !open
}
