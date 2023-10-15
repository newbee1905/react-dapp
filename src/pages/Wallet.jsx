import { useState, useMemo, useEffect } from 'react'

import useCoinStore from '@/stores/coins'

import SearchBar from '@/components/SearchBar'
import WalletTable from '@/components/Table/WalletTable'
import Chart from 'react-apexcharts'

import Loading from '@/components/Loading'

export default function Wallet() {
	const [input, setInput] = useState('')
	const [data, setData] = useState([]);
	const [balance, setBalance] = useState(0);

	const curHour = new Date().getHours()

	useEffect(() => {
		(async () => {
			const cryptos = await fetch('http://localhost:8000/v1/crypto', { 
        credentials: "include",
        mode: "cors", 
      })
      let cryptos_data = await cryptos.json();
      for (let i = 0; i < cryptos_data.length; ++i) {
        let crypto_data = cryptos_data[i]
        let cur_value_index = crypto_data.values.findIndex(val => val.time === curHour)
        cryptos_data[i].values = [...crypto_data.values.slice(cur_value_index), ...crypto_data.values.slice(0, cur_value_index)]
      }
      setData(cryptos_data)

      const balanceReq = await fetch('http://localhost:8000/v1/dapp/balance', {
          credentials: "include",
          mode: "cors", 
      })
      setBalance(Number(await balanceReq.text()))
		})()
	}, [])

	if (data === undefined || data.length === 0)
		return <Loading />

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


  let cur_value_eth = data.findIndex(val => val.name === 'eth')
	const processedData = data[cur_value_eth].values.map(val =>  Math.round(balance *val.value_aud * 100) / 100)

	const series = [
    {
      name: 'Portfolio',
      data: processedData.reverse(),
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
						Your Portfolio: {processedData[0]} ETH
					</h2>
					<Chart options={options} series={series} type="line" />
				</div>
			</div>
		</div>
	)
}
