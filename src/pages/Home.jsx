import { useState } from 'react'

import useCoinStore from '@/stores/coins'

import SearchBar from '@/components/SearchBar'
import MarketTable from '@/components/MarketTable'
import Chart from 'react-apexcharts'

import { getRandomInt } from '@/utils'

export default function Home() {
	const [input, setInput] = useState('')
	const data = useCoinStore((state) => state.data)

	const curHour = new Date().getHours()
	const options = {
		chart: {
			id: 'basic-bar',
			foreColor: '#fff',
		},
		xaxis: {
			categories: Array(24)
				.fill()
				.map((_, id) => ((id + curHour) % 24) + 1),
		},
		colors: ['#0ea5e9'],
	}

	const dataValues = Object.values(data)
	const randomData = dataValues[getRandomInt(dataValues.length - 1)]
	const series = [
		{
			name: randomData.values.symbol.slice(0, -3),
			data: randomData.values.changes,
		},
	]

	return (
		<div w="full" h="full">
			<SearchBar input={input} setInput={setInput} />
			<div
				p="md:x-10 y-4 x-2"
				display="flex"
				flex="col xl:row"
				w="full"
				h="full"
				justify="between"
			>
				<div w="xl:2/3 full" display="none md:block">
					<h2 text="slate-200" m="x-4">You may interest in {randomData.values.symbol.slice(0, -3)}</h2>
					<Chart options={options} series={series} type="line" />
				</div>
				<MarketTable input={input} />
			</div>
		</div>
	)
}
