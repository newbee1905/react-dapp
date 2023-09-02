import { useState, useMemo } from 'react'

import useCoinStore from '@/stores/coins'

import SearchBar from '@/components/SearchBar'
import WalletTable from '@/components/Table/WalletTable'
import Chart from 'react-apexcharts'

import WalletData from '@/wallet.json'

export default function Wallet() {
	const [input, setInput] = useState('')
	const data = useCoinStore((state) => state.data)
	const walletKeys = useMemo(() => Object.keys(WalletData))

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

	const processedData = useMemo(() => {
		return Object.entries(data).reduce((acc, cur) => {
			if (walletKeys.indexOf(cur[0]) === -1)
				return acc;
			for (let i = 0; i < 24; ++i) {
				acc[i] += WalletData[cur[0]].total * cur[1].values.changes[i]
				acc[i] = acc[i].toFixed(2)
			}
			return acc;
		}, Array(24).fill(0))
	}, [data, walletKeys])

	const series = useMemo(
		() => [
			{
				name: "Portfolio",
				data: processedData.reverse(),
			},
		],
		[]
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
			>
				<WalletTable input={input} />
				<div w="xl:2/3 full" display="none md:block">
					<h2 text="slate-200" m="x-4">
						Your Portfolio: {processedData[0]}
					</h2>
					<Chart options={options} series={series} type="line" />
				</div>
			</div>
		</div>
	)
}
