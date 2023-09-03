import PropTypes from 'prop-types'

import SearchBar from '@/components/SearchBar'
import TradingTable from '@/components/Table/TradingTable'

import { useState } from 'react'

export default function TradingCoinsSelection({ coin, setCoin, data }) {
	const [input, setInput] = useState('')
	const [open, setOpen] = useState(false)

	const handleClick = (e) => setOpen((prev) => !prev)

	return (
		<>
			<div m="y-3" text="slate-200 3xl" display="flex" onClick={handleClick}>
				<img src={coin.img} alt={coin.symbol} w="[36px]" h="[36px]" />
				&nbsp;
				<span text="slate-200 text-2xl">{coin.api.slice(0, -3)}</span>
			</div>
			{open ? (
				<div
					position="fixed"
					bg="slate-900 opacity-80"
					w="screen"
					h="screen"
					display="flex"
					items="center"
					justify="center"
					top="0"
					left="0"
					z="100"
				>
					<div w="[400px]">
						<SearchBar input={input} setInput={setInput} />
						<TradingTable
							input={input}
							setTradingCoin={setCoin}
							data={Object.entries(data)}
							setOpen={setOpen}
						/>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	)
}

TradingCoinsSelection.propTypes = {
	/**
	 * Coin's data
	 */
	coin: PropTypes.object.isRequired,
	/**
	 * Update coin's data for parent component
	 */
	setCoin: PropTypes.func.isRequired,
	/**
	 * Filtered Data
	 */
	data: PropTypes.object.isRequired,
}
