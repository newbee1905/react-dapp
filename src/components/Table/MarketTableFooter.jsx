import PropTypes from 'prop-types'

export default function MarketTableFooter({
	processedData,
	processedDataChunks,
	chunkId,
	setChunkId,
}) {
	function handleChange(e) {
		const value = parseInt(e.target.value)
		if (value === NaN) {
			return
		}
		setChunkId(value)
	}

	return (
		<nav
			display="flex"
			flex="col md:row"
			items="start md:center"
			justify="between"
			p="4"
			space="y-3 md:y-0"
			aria-label="Table navigation"
		>
			<span text="xs md:base normal gray-400">
				Showing
				<span text="semibold slate-200">
					&nbsp;{chunkId * 10 + 1} - {(chunkId + 1) * 10 + 1}
					&nbsp;
				</span>
				of
				<span className="font-semibold text-slate-200 dark:text-white">
					&nbsp;{processedData.length}&nbsp;
				</span>
			</span>
			<select
				display="block"
				p="x-1 y-2"
				text="xs md:base normal gray-900"
				rounded="md"
				shadow="lg"
				bg="slate-200 "
				border="none"
				value={chunkId}
				onChange={handleChange}
			>
				{Array(processedDataChunks.length)
					.fill()
					.map((_, id) => (
						<option value={id} key={id}>
							{id + 1}
						</option>
					))}
			</select>
		</nav>
	)
}

MarketTableFooter.propTypes = {
	processedData: PropTypes.array.isRequired,
	processedDataChunks: PropTypes.array.isRequired,
	chunkId: PropTypes.number.isRequired,
	setChunkId: PropTypes.func.isRequired,
}
