import { create } from 'zustand'

export default create((set, get) => ({
	isLogon: 0,
	toggleLogon: () =>
		set(({ isLogon }) => {
			return {
				isLogon: !isLogon,
			}
		}),
}))
