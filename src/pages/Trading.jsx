import { useState, useMemo, useEffect } from 'react'

import useCoinStore from '@/stores/coins'

import Chart from 'react-apexcharts'

import { useParams, useNavigate } from 'react-router-dom'

import TradingBox from '@/components/Trading/TradingBox'

import Loading from '@/components/Loading'

export default function Trading() {
	const [data, setData] = useState([]);

	const curHour = new Date().getHours()

	const navigate = useNavigate()
	const { coin } = useParams()

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

  if (!data || data.length === 0) {
    return <Loading />
  }

  const filtered_cryptos = data.filter(crypto => crypto.name === coin)
	if (filtered_cryptos.length === 0) {
		navigate('/')
	}

  const crypto = filtered_cryptos[0]

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

	const series = [
    {
      name: coin,
      data: crypto.values.map(val => Math.round(val.value_aud * 100) / 100),
    },
  ]

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
					<TradingBox coin={crypto} />
				</div>
				<div w="xl:2/3 full" display="none md:block">
					<span
						text="slate-200 4xl extrabold"
						m="x-4"
						display="inline-flex"
						items="center"
					>
						<img src={crypto.img} alt={crypto.name} w="[40px]" h="[40px]" />
						&nbsp;
						{coin}
					</span>
					<Chart options={options} series={series} type="line" />
				</div>
			</div>
		</div>
	)
}
