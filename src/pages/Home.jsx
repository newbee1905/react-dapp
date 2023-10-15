import { useState, useEffect } from 'react'

import SearchBar from '@/components/SearchBar'
import MarketTable from '@/components/Table/MarketTable'
import Chart from 'react-apexcharts'

import Loading from '@/components/Loading'

import { getRandomInt } from '@/utils'

export default function Home() {
	const [data, setData] = useState([]);
	const [input, setInput] = useState('')

	const curHour = new Date().getHours()

	useEffect(() => {
		(async () => {
			const cryptos = await fetch('http://localhost:8000/v1/crypto', { mode: 'cors' })
      let cryptos_data = await cryptos.json();
      for (let i = 0; i < cryptos_data.length; ++i) {
        let crypto_data = cryptos_data[i]
        let cur_value_index = crypto_data.values.findIndex(val => val.time === curHour)
        cryptos_data[i].values = [...crypto_data.values.slice(cur_value_index), ...crypto_data.values.slice(0, cur_value_index)]
      }
      setData(cryptos_data)
		})()
	}, [])

	/**
	 * using use memo here so that the value of these value only update
	 * the value of data
	 * -> updating input will not affect this
	 */
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

	if (data === undefined || data.length === 0)
		return <Loading />

	const randomData = data[getRandomInt(data.length - 1)]
	const series = [
    {
      name: randomData.name,
      data: randomData.values.map(val => Math.round(val.value_aud * 100) / 100),
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
				m="t-10"
			>
				<div w="xl:2/3 full" display="none md:block">
					<h2 text="slate-200" m="x-4">
						You may interest in {randomData.name}
					</h2>
					<Chart options={options} series={series} type="line" />
				</div>
				<MarketTable input={input} data={data} />
			</div>
		</div>
	)
}
