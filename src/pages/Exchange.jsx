import { useState, useMemo } from 'react'

import useCoinStore from '@/stores/coins'

import SearchBar from '@/components/SearchBar'
import MarketTable from '@/components/Table/MarketTable'
import Chart from 'react-apexcharts'

import { getRandomInt } from '@/utils'

export default function Exchange() {
	const data = useCoinStore((state) => Object.entries(state.data))
	const [from, setFrom] = useState(data[0])
	const [to, setTo] = useState(data[1])

	console.log(from, to);

	return (
		<div w="full" h="full">
			<div
				p="md:x-10 y-20 x-2"
				display="flex"
				flex="col"
				w="full"
				h="full"
				justify="center"
				items="center"
			>
				<div max-w="2xl">
					<div>

					</div>
					<input
						p="x-2 y-10"
						w="full"
						rounded="lg"
						text="slate-200 lg"
						bg="slate-800"
						outline="transparent"
						border="2 slate-200 solid"
						m="b-3"
					/>
					<div>

					</div>
					<input
						p="x-2 y-10"
						w="full"
						rounded="lg"
						text="slate-200 lg"
						bg="slate-800"
						outline="transparent"
						border="2 slate-200 solid"
						m="b-3"
					/>
					<button
						p="x-1.5 y-5.5"
						m="t-3 b-10"
						w="full"
						bg="slate-400 hover:slate-500"
						shadow="md"
						rounded="md"
						text="slate-900 lg"
						border="0"
						className="upperclase"
					>
						Convert
					</button>
				</div>
			</div>
		</div>
	)
}
