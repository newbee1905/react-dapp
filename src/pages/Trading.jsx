import { useMemo } from 'react'

import useCoinStore from '@/stores/coins'

import Chart from 'react-apexcharts'

import { useParams, useNavigate } from 'react-router-dom'

import TradingBox from '@/components/Trading/TradingBox'

export default function Trading() {
	const data = useCoinStore((state) => state.data)

	const navigate = useNavigate()
	const { coin } = useParams()
	if (!data.hasOwnProperty(coin)) {
		navigate('/')
	}

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

	const series = useMemo(
		() => [
			{
				name: coin,
				data: data[coin].values.changes,
			},
		],
		[coin, data]
	)

	return (
		<div w="full" h="full">
			<div
				p="md:x-10 y-20 x-2"
				display="flex"
				flex="col xl:row"
				w="full"
				h="full"
				justify="between"
			>
				<div w="xl:1/3 full" m="r-10">
					<TradingBox coin={coin} />
				</div>
				<div w="xl:2/3 full" display="none md:block">
					<span
						text="slate-200 4xl extrabold"
						m="x-4"
						display="inline-flex"
						items="center"
					>
						<img src={data[coin].img} alt={coin.symbol} w="[40px]" h="[40px]" />
						&nbsp;
						{coin}
					</span>
					<Chart options={options} series={series} type="line" />
				</div>
			</div>
		</div>
	)
}
