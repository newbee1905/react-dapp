import { useState, useMemo } from 'react'

import useCoinStore from '@/stores/coins'

import SearchBar from '@/components/SearchBar'
import MarketTable from '@/components/Table/MarketTable'
import Chart from 'react-apexcharts'

import { getRandomInt } from '@/utils'

export default function Exchange() {
	const data = useCoinStore((state) => state.data)

	return (
		<div w="full" h="full">
			<div
				p="md:x-10 y-4 x-2"
				display="flex"
				flex="col xl:row"
				w="full"
				h="full"
				justify="between"
			>
				<div w="xl:2/3 full" display="none md:block">
					<h2 text="slate-200" m="x-4">
						You may interest in {randomData.values.symbol.slice(0, -3)}
					</h2>
					<Chart options={options} series={series} type="line" />
				</div>
			</div>
		</div>
	)
}
