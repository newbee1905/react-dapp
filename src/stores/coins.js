import data from '@/data.json'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export default create(
	persist(
		(set, get) => ({
			raw: Object.freeze(data),
			data: {},
			api: (apiEndPoint) => `https://api.gemini.com/v2/ticker/${apiEndPoint}`,
			getData: async () => {
				let data = {}
				for (const [key, value] of Object.entries(get().raw)) {
					let coinValues = await (await fetch(get().api(value.api))).json()

					coinValues.diff =
						(coinValues.changes[0] - coinValues.changes[23]) /
						coinValues.changes[0]
					if (!coinValues.diff) coinValues.diff = 0
					coinValues.diff *= 100
					console.log(value)

					data[key] = {
						...value,
						values: coinValues,
					}
				}
				set({ data: data })
			},
		}),
		{
			name: 'coins-data',
		}
	)
)
