import { useState, useMemo, useEffect } from 'react'

import useCoinStore from '@/stores/coins'

import SearchBar from '@/components/SearchBar'
import MarketTable from '@/components/Table/MarketTable'
import Chart from 'react-apexcharts'

import Loading from '@/components/Loading'

import { getRandomInt } from '@/utils'

export default function Home() {
	const [data, getData] = useCoinStore(({ data, getData }) => [data, getData])

	const [input, setInput] = useState('')

	/**
	 * using use memo here so that the value of these value only update
	 * the value of data
	 * -> updating input will not affect this
	 */
	const curHour = new Date().getHours()
	const options = useMemo(() => {
		return {
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
	}, [curHour])

	const dataValues = useMemo(() => Object.values(data), [data])
	const randomData = useMemo(
		() => dataValues[getRandomInt(dataValues.length - 1)],
		[data]
	)
	const series = useMemo(
		() => [
			{
				name: randomData.values.symbol.slice(0, -3),
				data: randomData.values.changes.reverse(),
			},
		],
		[randomData]
	)

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
				m="t-10"
			>
				<div w="xl:2/3 full" display="none md:block">
					<h2 text="slate-200" m="x-4">
						You may interest in {randomData.values.symbol.slice(0, -3)}
					</h2>
					<Chart options={options} series={series} type="line" />
				</div>
				<MarketTable input={input} />
			</div>
		</div>
	)
}
